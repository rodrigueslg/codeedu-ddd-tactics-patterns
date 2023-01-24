import CustomerFactory from "./customer.factory";
import Address from "../value-object/address";
import EventDispatcher from "../../@shared/event/event-dispatcher";

describe("Customer factory unit test", () => {
  const eventDispatcher = new EventDispatcher();

  it("should create a customer", () => {
    let customer = CustomerFactory.create(eventDispatcher, "John");

    expect(customer.id).toBeDefined();
    expect(customer.name).toBe("John");
    expect(customer.Address).toBeUndefined();
  });

  it("should create a customer with an address", () => {
    const address = new Address("Street", 1, "13330-250", "São Paulo");

    let customer = CustomerFactory.createWithAddress(
      eventDispatcher,
      "John",
      address
    );

    expect(customer.id).toBeDefined();
    expect(customer.name).toBe("John");
    expect(customer.Address).toBe(address);
  });
});
