import MailchimpSubscribe from "react-mailchimp-subscribe";
import Newsletter from "./Newsletter";

function MailchimpForm() {
  const url =
    "https://gmail.us7.list-manage.com/subscribe/post?u=5e7b7e8d5c1c7b5f4b6b6e7e3&amp;id=5e7b7e8d5c";
  return (
    <div>
      <MailchimpSubscribe
        url={url}
        render={({ subscribe, status, message }) => (
          <Newsletter
            status={status}
            message={message}
            onValidated={(formData) => subscribe(formData)}
          />
        )}
      />
    </div>
  );
}

export default MailchimpForm;
