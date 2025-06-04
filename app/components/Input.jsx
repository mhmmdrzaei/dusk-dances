"use client";

export default function Input({ title}) {


  return (
    <div className="mailing-list">
      {title && <h3>{title}</h3>}
      <form
        action="https://duskdances.us3.list-manage2.com/subscribe/post?u=48a3f28fb14c8f2617d6b2cdb&amp;id=bdefd00696"
        method="post"
        target="_blank"
        noValidate
        className="mailchimp-form"
      >
        <div className="mc-field-group">
          <input
            placeholder="Email (required)"
            type="email"
            name="EMAIL"
            id="mce-EMAIL"
            required
          />
        </div>

        {/* Hidden anti-bot field */}
        <div
          style={{ position: "absolute", left: "-5000px" }}
          aria-hidden="true"
        >
          <input
            type="text"
            name="b_48a3f28fb14c8f2617d6b2cdb_bdefd00696"
            tabIndex={-1}
          />
        </div>

        <div className="form-actions">
          <button type="submit">Go</button>
        </div>
      </form>
    </div>
  );
}
