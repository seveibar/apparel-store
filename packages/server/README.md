# Apparel Store Server

Express/mongoose API server for Apparel Store.

## Endpoints

| Endpoint                     | Description                          | Parameters                                        |
| ---------------------------- | ------------------------------------ | ------------------------------------------------- |
| `GET /api/rpc/seed-database` | Seeds database with 20 apparel items |                                                   |
| `GET /api/item`              | Search or get all items              | `?q=<search string>`                              |
| `POST /api/customer`         | Add Customer                         | [POST Customer Params](#post-customer-parameters) |
| `POST /api/payment-intent`   | Create Stripe payment intent         | [POST Payment Intent](#post-payment-intent)       |

## Schema

- `Customer` - Represents a customer, includes information such as shipping method and primary payment method
- `InventoryItem` - An item in the store's inventory
- `Order` - An order from a customer, including all purchased items

## Running Tests

## Notes

- The endpoints and tests directory would get messy as if this project progressed. It would be better to organize the tests with the endpoints

## Appendix

### POST Customer Parameters

The POST request to add a customer must include `Content-Type: application/json` and a JSON object with the following fields:

- `firstName`
- `lastName`
- `email`
- `streetAddress`
- `city`
- `state`
- `zip`
- `phone` _(optional)_
- `paymentMethodId` _provided by Stripe Elements_

### POST Payment Intent

The POST request to add a customer must include `Content-Type: application/json` and a JSON object with the following fields:

- `totalCost` (in dollars)
- `customerId` - _NOT_ a stripe customer id. Use the Customer.\_id from the Mongo database
