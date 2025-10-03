# Brawl stars ETL

## Data Source

The data is retrieved from the [Brawl Stars API](https://developer.brawlstars.com/#/). It needs an API key that can only be obtained my creating an account.

## Purpose / Business question

The built in sorting/filtering for the brawl stars game app is not very specific. There is no built in way to sort by more than 2 filters.

The purpose of this project is to find brawlers I should play more for my account based on their level and trophy range.

<img src="Screenshot_20251003_113823_Brawl_Stars.jpg" alt="drawing" width="500"/>
<img src="power level.jpg" alt="drawing" width="500"/>
<img src="least trophies.jpg" alt="drawing" width="500"/>


Using the brawl stars API, I retrieve my User data which I then transform to find the following:

- Brawlers that are high level (10 or 11) and I have not played a lot (low trophies).
- Brawlers to level up next:  level 9 or above that need a star power.

## Installation

Use [pip](https://pip.pypa.io/en/stable/) to install the dependencies in requirements.txt.

```bash
pip install requirements.txt
```

## Usage

Run the project.py file in your terminal:

```
python .\project.py
```

## Credits

- Made by [Me!](https://developer.brawlstars.com/#/)
- [Brawl Stars API](https://developer.brawlstars.com/#/)