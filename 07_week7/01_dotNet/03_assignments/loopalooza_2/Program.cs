string[] emailSubjects = {
    "Regarding your recent order #123456789 - Delivery Update and Tracking Information",
    "Question about billing and invoice for last month's services",
    "[IMPORTANT] Your account security alert: Unusual activity detected - URGENT action required",
    "Meeting rescheduled to 3 PM EST - please confirm ASAP",
    "Follow-up on support ticket #7890 regarding software installation issue",
    "Weekly Report for Q2 Performance Review - urgent attention needed by EOD",
    "Quick question about the new feature",
    "Feedback on new feature rollout - please provide your thoughts",
    "Your subscription renewal notice for premium services",
    "Product inquiry - need info soon on model XYZ",
    "ASAP: Critical bug fix deployment details",
    "Request for vacation approval",
    "Urgent: System maintenance notification",
    "Reminder: Project deadline approaching",
    "Customer complaint regarding service outage - ASAP response",
    "New policy update for remote work guidelines - please read",
    "Your monthly usage report is now available",
    "URGENT: Database migration schedule confirmed",
    "Inquiry about partnership opportunities",
    "General feedback and suggestions for improvement"
};

var longSubjectCounter = 0;
var longestSubject = emailSubjects[0];

foreach (var subject in emailSubjects)
{
    if (subject.Length > 50)
    {
        longSubjectCounter++;
    }
    if(subject.Length > longestSubject.Length){
        longestSubject = subject;
    }
    Console.WriteLine($"Subject: {subject} ({subject.Length} Characters)");
}

Console.WriteLine($"Long Subject Line Count: {longSubjectCounter}");

Console.WriteLine($"Longest Subject Line: {longestSubject} ({longestSubject.Length} characters)");
