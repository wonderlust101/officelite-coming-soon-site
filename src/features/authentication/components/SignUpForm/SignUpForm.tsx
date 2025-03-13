import TextInput from "@/component/Form/TextInput";
import Button from "@/component/Button";
import Form from "@/component/Form";
import OptionSelect from "@/component/Form/OptionSelect";
import useAuthentication from "@/features/authentication/useAuthentication";
import pricing from "@/data/pricing.json";
import "./SignUpForm.scss";

export default function SignUpForm() {
    const { fields, setFields, errors, handleSubmit, formatPhoneNumber } = useAuthentication();

    return (
        <section className="sign-up-form">
            <Form
                onSubmit={ handleSubmit }
                legend="Sign Up to OfficeLite"
            >
                <div className="sign-up-form__inputs">
                    <TextInput
                        name="name"
                        placeholder="Name"
                        value={ fields.name }
                        onChange={ (e) => setFields((prev) => (
                            { ...prev, name: e.target.value }
                        )) }
                        error={ errors.name?.error || false }
                        required
                    />

                    <TextInput
                        name="email"
                        placeholder="Email Address"
                        value={ fields.email }
                        onChange={ (e) => setFields((prev) => (
                            { ...prev, email: e.target.value }
                        )) }
                        error={ errors.email?.error || false }
                        required
                    />

                    <OptionSelect
                        name="plan"
                        value={ fields.plan }
                        onChange={ (plan) => setFields((prev) => (
                            { ...prev, plan: plan }
                        )) }
                        options={ pricing }
                        optionFormat={ (option) => (
                            <div className="sign-up-form__option" key={ option.tier }>
                                <span className="sign-up-form__option--bold">{ option.tier } Pack</span>
                                <span className="sign-up-form__option--grey">
                                    { option.price === 0 ? "Free" : option.price }
                                </span>
                            </div>)
                        }
                    />

                    <TextInput
                        name="phone-number"
                        placeholder="Phone Number"
                        type="tel"
                        value={ formatPhoneNumber(fields.phoneNumber) }
                        onChange={ (e) => setFields((prev) => (
                            { ...prev, phoneNumber: e.target.value }
                        )) }
                        error={ errors.phoneNumber?.error || false }
                        required
                    />

                    <TextInput
                        name="company"
                        placeholder="Company"
                        value={ fields.company }
                        onChange={ (e) => setFields((prev) => (
                            { ...prev, company: e.target.value }
                        )) }
                        error={ errors.company?.error || false }
                        required
                    />
                </div>

                <Button
                    color="blue"
                    size="medium"
                    type="submit"
                    ariaLabel="Get on the emailing list"
                >
                    Get on the list
                </Button>
            </Form>
        </section>
    );
}