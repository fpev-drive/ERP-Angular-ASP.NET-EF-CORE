using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ERP.API.Models
{
    public class Order
    {
        public int OrderId { get; set; }
        public int SupplierId { get; set; }
        public Supplier Supplier { get; set; }
        public string Status { get; set; }
        public double TotalCost { get; set; }
        public System.Nullable<int> ApprovedBy { get; set; }
        [ForeignKey("ApprovedBy")]
        public Employee Employee { get; set; }
        public int CreatedBy { get; set; }
        [ForeignKey("CreatedBy")]
        public Employee CreatorEmployee { get; set; }
        public DateTime RequestedDate { get; set; }
        public System.Nullable<DateTime> ReceivedDate { get; set; }
        public ICollection<OrderItem> OrderItems { get; set; }
        [Timestamp]  
        public byte[] Timestamp { get; set; }  
    }
}