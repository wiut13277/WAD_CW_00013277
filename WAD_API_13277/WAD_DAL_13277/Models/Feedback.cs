namespace WAD_API_13277.Models
{
    public class Feedback
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public FeedbackType Type { get; set; }
    }
}
