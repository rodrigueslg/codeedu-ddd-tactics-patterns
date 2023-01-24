import Customer from "../entity/customer";
import { v4 as uuid } from "uuid";
import Address from "../value-object/address";
import EventDispatcher from "../../@shared/event/event-dispatcher";

export default class CustomerFactory {
  public static create(
    eventDispatcher: EventDispatcher,
    name: string
  ): Customer {
    return new Customer(eventDispatcher, uuid(), name);
  }

  public static createWithAddress(
    eventDispatcher: EventDispatcher,
    name: string,
    address: Address
  ): Customer {
    const customer = new Customer(eventDispatcher, uuid(), name);
    customer.changeAddress(address);
    return customer;
  }
}
