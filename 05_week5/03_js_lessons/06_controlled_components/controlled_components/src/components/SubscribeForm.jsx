import { useState } from "react";

function SubscribeForm() {
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscriptionChange = (event) => {
    setIsSubscribed(event.target.checked); // Use event.target.checked
  };

  return (
    <form>
      <label>
        <input
          type="checkbox"
          checked={isSubscribed}
          onChange={handleSubscriptionChange}
        />
        Subscribe to newsletter
      </label>
      <p>Subscribed: {isSubscribed ? 'Yes' : 'No'}</p>
    </form>
  );
}

export default SubscribeForm