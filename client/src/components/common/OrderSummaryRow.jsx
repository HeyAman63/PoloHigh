const OrderSummaryRow = ({ label, value, emphasis = false }) => {
  if (label == null && value == null) {
    return null;
  }

  const valueClasses = emphasis ? 
    "text-lg font-semibold text-primary" 
    : "text-text-base";

  return (
    <div className="flex items-center justify-between text-sm">
      <span className="text-text-base/90">{label}</span>
      <span className={valueClasses}>{value}</span>
    </div>
  );
};

export default OrderSummaryRow;
