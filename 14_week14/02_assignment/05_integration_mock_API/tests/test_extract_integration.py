import requests
import requests_mock

from config.vars import get_vars


# Stand-Alone test, does not test anything related to the pipeline
def test_requests_get_returns_expected_json():
    url = "https://api.example.com/widgets/42"
    fake_json = {"id": 42, "name": "Widget", "price": 9.99}

    with requests_mock.Mocker() as m:
        m.get(url, json=fake_json, status_code=200)
        resp = requests.get(url)
        assert resp.status_code == 200
        assert resp.json() == fake_json


def test_extract_with_mock_request_success_path():
    # Arrange: url, token, and a fake JSON payload
    url = "https://api.example.com/cart/42"
    fake_token = "this_is_the_secret_token!"

    headers = {"Authorization": f"Bearer {fake_token}"}
    fake_json = {
        "id": 1,
        "products": [
            {
                "id": 168,
                "title": "Charger SXT RWD",
                "price": 32999.99,
                "quantity": 3,
                "total": 98999.97,
                "discountPercentage": 13.39,
                "discountedTotal": 85743.87,
                "thumbnail": "https://cdn.dummyjson.com/products/images/vehicle/Charger%20SXT%20RWD/thumbnail.png",
            },
            {
                "id": 78,
                "title": "Apple MacBook Pro 14 Inch Space Grey",
                "price": 1999.99,
                "quantity": 2,
                "total": 3999.98,
                "discountPercentage": 18.52,
                "discountedTotal": 3259.18,
                "thumbnail": "https://cdn.dummyjson.com/products/images/laptops/Apple%20MacBook%20Pro%2014%20Inch%20Space%20Grey/thumbnail.png",
            },
            {
                "id": 183,
                "title": "Green Oval Earring",
                "price": 24.99,
                "quantity": 5,
                "total": 124.94999999999999,
                "discountPercentage": 6.28,
                "discountedTotal": 117.1,
                "thumbnail": "https://cdn.dummyjson.com/products/images/womens-jewellery/Green%20Oval%20Earring/thumbnail.png",
            },
            {
                "id": 100,
                "title": "Apple Airpods",
                "price": 129.99,
                "quantity": 5,
                "total": 649.95,
                "discountPercentage": 12.84,
                "discountedTotal": 566.5,
                "thumbnail": "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20Airpods/thumbnail.png",
            },
        ],
        "total": 103774.85,
        "discountedTotal": 89686.65,
        "userId": 33,
        "totalProducts": 4,
        "totalQuantity": 15,
    }

    # Act: mock GET(url) to return (200, json=fake)
    with requests_mock.Mocker() as m:
        m.get(url, json=fake_json, status_code=200, headers=headers)
        resp = requests.get(url)

        # Assert: extract(url, token) == fake
        assert resp.headers == headers
        assert resp.status_code == 200
        assert resp.json() == fake_json
