import EventDispatcher from "../../@shared/event/event-dispatcher";
import SendConsoleLog1WhenCustomerIsCreatedHandler from "../event/handler/send-console-log1-when-customer-is-created.handler";
import SendConsoleLog2WhenCustomerIsCreatedHandler from "../event/handler/send-console-log2-when-customer-is-created.handler";
import Address from "../value-object/address";
import Customer from "./customer";

describe("Customer unit tests", () => {
  const eventDispatcher = new EventDispatcher();

  it("should throw error when id is empty", () => {
    expect(() => {
      let customer = new Customer(eventDispatcher, "", "John");
    }).toThrowError("Id is required");
  });

  it("should throw error when name is empty", () => {
    expect(() => {
      let customer = new Customer(eventDispatcher, "123", "");
    }).toThrowError("Name is required");
  });

  it("should change name", () => {
    // Arrange
    const customer = new Customer(eventDispatcher, "123", "John");

    // Act
    customer.changeName("Jane");

    // Assert
    expect(customer.name).toBe("Jane");
  });

  it("should activate customer", () => {
    const customer = new Customer(eventDispatcher, "1", "Customer 1");
    const address = new Address("Street 1", 123, "13330-250", "São Paulo");
    customer.Address = address;

    customer.activate();

    expect(customer.isActive()).toBe(true);
  });

  it("should throw error when address is undefined when you activate a customer", () => {
    expect(() => {
      const customer = new Customer(eventDispatcher, "1", "Customer 1");
      customer.activate();
    }).toThrowError("Address is mandatory to activate a customer");
  });

  it("should deactivate customer", () => {
    const customer = new Customer(eventDispatcher, "1", "Customer 1");

    customer.deactivate();

    expect(customer.isActive()).toBe(false);
  });

  it("should add reward points", () => {
    const customer = new Customer(eventDispatcher, "1", "Customer 1");
    expect(customer.rewardPoints).toBe(0);

    customer.addRewardPoints(10);
    expect(customer.rewardPoints).toBe(10);

    customer.addRewardPoints(10);
    expect(customer.rewardPoints).toBe(20);
  });

  it("should notify customer created event handlers", () => {
    expect(
      eventDispatcher.getEventHandlers["CustomerCreatedEvent"][0]
    ).toBeDefined();
    const eventHandler1 =
      eventDispatcher.getEventHandlers["CustomerCreatedEvent"][0];
    const spyEventHandler1 = jest.spyOn(eventHandler1, "handle");

    expect(
      eventDispatcher.getEventHandlers["CustomerCreatedEvent"][1]
    ).toBeDefined();
    const eventHandler2 =
      eventDispatcher.getEventHandlers["CustomerCreatedEvent"][1];
    const spyEventHandler2 = jest.spyOn(eventHandler2, "handle");

    const customer = new Customer(eventDispatcher, "1", "Customer 1");

    expect(spyEventHandler1).toHaveBeenCalled();
    expect(spyEventHandler2).toHaveBeenCalled();
  });

  it("should notify address changed event handlers", () => {
    expect(
      eventDispatcher.getEventHandlers["CustomerAddressChangedEvent"][0]
    ).toBeDefined();
    const eventHandler =
      eventDispatcher.getEventHandlers["CustomerAddressChangedEvent"][0];
    const spyEventHandler = jest.spyOn(eventHandler, "handle");

    const customer = new Customer(eventDispatcher, "1", "Customer 1");
    customer.changeAddress(new Address("Rua 1", 1, "12345-678", "Cidade 1"));

    expect(spyEventHandler).toHaveBeenCalled();
  });
});
