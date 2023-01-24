import EventHandlerInterface from "../../../@shared/event/event-handler.interface";
import CustomerCreatedEvent from "../customer-created.event";
import CustomerAddressChangedEvent from "../customer-address-changed.event";

export default class SendConsoleLogWhenCustomerAddressIsChangedHandler
  implements EventHandlerInterface<CustomerCreatedEvent>
{
  handle(event: CustomerAddressChangedEvent): void {
    console.log("Endereço do cliente: {id}, {nome} alterado para: {endereco}");
  }
}
