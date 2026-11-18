export default function CustomerInfo({ ref }) {
  return (
    <form
      ref={ref}
      className="fieldset bg-base-100 border-base-200 rounded-box  border p-4"
    >
      <h3 className=" text-lg font-bold">Billing details</h3>
      <div className="flex gap-5 justify-stretch">
        <div className="fieldset flex-1">
          <label htmlFor="firstName" className="label">
            First Name
          </label>
          <input
            required
            name="firstName"
            type="text"
            className="input w-full"
            placeholder="John"
          />
        </div>
        <div className="fieldset flex-1">
          <label htmlFor="lastName" className="label">
            Last Name
          </label>
          <input
            required
            name="lastName"
            type="text"
            className="input w-full"
            placeholder="Doe"
          />
        </div>
      </div>
      <label htmlFor="companyName" className="label">
        Company Name (Optional)
      </label>
      <input
        name="companyName"
        type="text"
        className="input w-full"
        placeholder="Pretty Pet"
      />
      <label htmlFor="country" className="label">
        Country/Region
      </label>
      <select required name="country" defaultValue="" className="select w-full">
        <option value="" disabled={true}>
          Pick a Country
        </option>
        <option value="BD">BD</option>
        <option value="USA">USA</option>
        <option value="Uk">UK</option>
      </select>
      <label htmlFor="address" className="label">
        Street Address
      </label>
      <input
        required
        name="address"
        type="text"
        className="input w-full"
        placeholder="123 Main St"
      />
      <label htmlFor="town" className="label">
        Town/city
      </label>
      <input
        required
        name="town"
        type="text"
        className="input w-full"
        placeholder="Dhaka"
      />
      <label htmlFor="country" className="label">
        State
      </label>
      <select required name="country" defaultValue="" className="select w-full">
        <option value="" disabled={true}>
          Pick a State
        </option>
        <option value="Dhaka">Dhaka</option>
        <option value="Barishal">Barishal</option>
        <option value="Chittagong">Chittagong</option>
        <option value="Cumilla">Cumilla</option>
        <option value="Sylhet">Sylhet</option>
        <option value="Rangpur">Rangpur</option>
        <option value="Rajshahi">Rajshahi</option>
        <option value="Khulna">Khulna</option>
        <option value="Noakhali">Noakhali</option>
      </select>
      <label htmlFor="zipCode" className="label">
        ZIP Code
      </label>
      <input
        required
        name="zipCode"
        type="number"
        className="input w-full"
        placeholder=""
      />
      <div className="flex gap-5 justify-stretch">
        <div className="fieldset flex-1">
          <label htmlFor="phone" className="label">
            Phone
          </label>
          <input
            required
            name="phone"
            type="tel"
            className="input w-full"
            placeholder="+880"
          />
        </div>
        <div className="fieldset flex-1">
          <label htmlFor="email" className="label">
            Email
          </label>
          <input
            required
            name="email"
            type="email"
            className="input w-full"
            placeholder="johndoe@gmail.com"
          />
        </div>
      </div>
      <label htmlFor="account" className="label">
        <input required name="account" type="checkbox" className="checkbox" />
        Create an account?
      </label>
      <label htmlFor="username" className="label">
        Account Username
      </label>
      <input
        required
        name="username"
        type="text"
        className="input w-full"
        placeholder="username"
      />
      <label htmlFor="password" className="label">
        Create Account Password
      </label>
      <input
        required
        name="password"
        type="password"
        className="input w-full"
        placeholder="Password"
      />
      <div className="divider"></div>
      <h3>Additional information</h3>
      <div className="divider"></div>
      <label htmlFor="orderNotes" className="label">
        Order Notes
      </label>
      <textarea
        name="orderNotes"
        className="textarea w-full"
        placeholder="Notes About Your Order"
      ></textarea>
    </form>
  );
}
