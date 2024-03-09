namespace WAD_DAL_13277.Models
{
    public class Issue
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public Priority Priority { get; set; }
        public DateTime OpenedOn { get; set; } = DateTime.Now;
    }
}
