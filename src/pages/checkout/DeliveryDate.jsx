import dayjs from "dayjs";

const DeliveryDate = ({deliveryOptions, cartItem}) => {
  const selectedDeliveryOption = deliveryOptions.find((deliveryOptions) => {
    return deliveryOptions.id === cartItem.deliveryOptionId;
  });

  return (
    <div className="delivery-date">
      Delivery date:{" "}
      {dayjs(selectedDeliveryOption.estimatedDeliveryTimeMs).format(
        "dddd, MMMM D"
      )}
    </div>
  );
};

export default DeliveryDate;
