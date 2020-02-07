using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using ERP.API.Data;
using ERP.API.DTOs.EmployeeDtos;
using ERP.API.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace ERP.API.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    public class EmployeesController : Controller
    {
        private readonly IDataRepository repo;
        private readonly IMapper mapper;
        public EmployeesController(IDataRepository repo, IMapper mapper)
        {
            this.mapper = mapper;
            this.repo = repo;

        }
        [HttpGet]
        public async Task<IActionResult> GetEmployeesAsync()
        {
            var employees = await this.repo.GetEmployees();
            var employeesToReturn = mapper.Map<IEnumerable<EmployeeListDto>>(employees);
            return Ok(employeesToReturn);
        }

        [HttpGet("{employeeId}")]
        public async Task<IActionResult> GetEmployeeAync(int employeeId)
        {
            var employee = await this.repo.GetEmployee(employeeId);
            if (employee == null)
                return NotFound("The employee is not found");
            var employeeToReturn = this.mapper.Map<EmployeeDetailedDto>(employee);

            return Ok(employee);
        }

        [HttpPut("{employeeId}")]
        public async Task<IActionResult> UpdateEmployeeAsync(int employeeId, [FromBody] Employee employeeToUpdate)
        {
            var updatedEmployee = await this.repo.UpdateEntity(employeeToUpdate);
            if (updatedEmployee == null)
                return BadRequest("concurrencyError");

            return Ok(updatedEmployee);
        }
    }
}