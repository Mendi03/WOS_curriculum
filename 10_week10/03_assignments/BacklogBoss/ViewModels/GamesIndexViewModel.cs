// ViewModels/MoviesIndexViewModel.cs
namespace BacklogBoss.ViewModels;

public class GamesIndexViewModel
{
    public List<GameRowViewModel> Games { get; set; } = [];
    public int TotalCount => Games.Count;
}