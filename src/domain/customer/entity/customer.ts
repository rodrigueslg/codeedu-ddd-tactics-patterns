import EventDispatcher from "../../@shared/event/event-dispatcher";
import CustomerCreatedEvent from "../event/customer-created.event";
import SendConsoleLogWhenCustomerAddressIsChangedHandler from "../event/handler/send-console-log-when-customer-address-is-changed.handler";
import SendConsoleLog1WhenCustomerIsCreatedHandler from "../event/handler/send-console-log1-when-customer-is-created.handler";
import SendConsoleLog2WhenCustomerIsCreatedHandler from "../event/handler/send-console-log2-when-customer-is-created.handler";
import Address from "../value-object/address";
import CustomerAddressChangedEvent from "../event/customer-address-changed.event";

export default class Customer {
  private _id: string;
  private _name: string = "";
  private _address!: Address;
  private _active: boolean = false;
  private _rewardPoints: number = 0;

  private _eventDispatcher: EventDispatcher;

  constructor(eventDispatcher: EventDispatcher, id: string, name: string) {
    this._eventDispatcher = eventDispatcher;

    this._id = id;
    this._name = name;

    this.validate();
    this.registerEvents();

    const customerCreatedEvent = new CustomerCreatedEvent(this);
    this._eventDispatcher.notify(customerCreatedEvent);
  }

  registerEvents(): void {
    const customerCreated1Handler =
      new SendConsoleLog1WhenCustomerIsCreatedHandler();
    this._eventDispatcher.register(
      "CustomerCreatedEvent",
      customerCreated1Handler
    );

    const customerCreated2Handler =
      new SendConsoleLog2WhenCustomerIsCreatedHandler();
    this._eventDispatcher.register(
      "CustomerCreatedEvent",
      customerCreated2Handler
    );

    const addresschangedHandler =
      new SendConsoleLogWhenCustomerAddressIsChangedHandler();
    this._eventDispatcher.register(
      "CustomerAddressChangedEvent",
      addresschangedHandler
    );
  }

  get id(): string {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get rewardPoints(): number {
    return this._rewardPoints;
  }

  validate() {
    if (this._id.length === 0) {
      throw new Error("Id is required");
    }
    if (this._name.length === 0) {
      throw new Error("Name is required");
    }
  }

  changeName(name: string) {
    this._name = name;
    this.validate();
  }

  get Address(): Address {
    return this._address;
  }

  changeAddress(address: Address) {
    this._address = address;

    const customerAddressChangedEvent = new CustomerAddressChangedEvent(this);
    this._eventDispatcher.notify(customerAddressChangedEvent);
  }

  isActive(): boolean {
    return this._active;
  }

  activate() {
    if (this._address === undefined) {
      throw new Error("Address is mandatory to activate a customer");
    }
    this._active = true;
  }

  deactivate() {
    this._active = false;
  }

  addRewardPoints(points: number) {
    this._rewardPoints += points;
  }

  set Address(address: Address) {
    this._address = address;
  }
}
