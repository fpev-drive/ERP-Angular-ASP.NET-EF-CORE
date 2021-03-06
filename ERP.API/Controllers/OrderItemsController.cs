using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using ERP.API.Data;
using ERP.API.DTOs.OrderDtos;
using ERP.API.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace ERP.API.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    public class OrderItemsController : Controller
    {
        private IDataRepository repository;
        private IMapper mapper;
        public OrderItemsController(IDataRepository repository, IMapper mapper)
        {
            this.mapper = mapper;
            this.repository = repository;
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> GetOrderItemsAsync(int id) 
        {
            var orderItems = await this.repository.GetOrderItems(id);
            if(orderItems == null)
                return NotFound();

            var orderItemsToReturn = this.mapper.Map<IEnumerable<OrderItemDto>>(orderItems);
            return Ok(orderItemsToReturn);
        }

        [HttpPost]
        public async Task<IActionResult> CreateOrderItemsAsync([FromBody] List<OrderItem> orderItemToCreate) 
        {
            await this.repository.AddOrderItem(orderItemToCreate);
            return Ok();
        }

        [HttpPut("{orderId}")]
        public async Task<IActionResult> UpdateOrderItemsAsync(int orderId, [FromBody] List<OrderItem> orderitemsToUpdate) 
        {
           var succeeded = await this.repository.UpdateOrderItems(orderitemsToUpdate, orderId);
           if(!succeeded)
            return BadRequest("Update NOT succeeded!");

            return Ok();
        }

        [HttpDelete("{orderId}/{itemId}")]
        public async Task<IActionResult> RemoveOrderItemsAsync(int orderId, int itemId)
        {
            var orderItemsToDelete =  await this.repository.GetSingleOrderItems(orderId, itemId);

            if(orderItemsToDelete != null) {
                await this.repository.Delete(orderItemsToDelete); 
                return Ok();
            }
                        
            return BadRequest("Order Item does NOT exist!");
        }
    }
}