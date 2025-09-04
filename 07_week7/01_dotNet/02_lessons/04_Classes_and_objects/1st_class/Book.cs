class Book
{
    string Title { get; set; }
    string Author { get; set; }
    int _publicationYear;
    int PublicationYear
    {
        get
        {
            return _publicationYear;
        }
        set
        {
            if (value >= 0)
            {
                _publicationYear = value;
            }
            else
            {
                Console.WriteLine("Declaration error: Book year must be a number greater than 0");
                _publicationYear = 0;
            }
        }
    }

    public string ISBN { get; private set; }

    public Book(string title, string author, int publicationYear, string isbn)
    {
        Title = title;
        Author = author;
        PublicationYear = publicationYear;
        ISBN = isbn;
    }

    public void DisplayBookInfo()
    {
        Console.WriteLine($"Book info:\nTitle: {Title}\nAuthor: {Author}\nPublication Year: {PublicationYear}\nISBN: {ISBN}");
    }
}