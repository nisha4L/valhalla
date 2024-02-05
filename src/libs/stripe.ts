import { Stripe,loadStripe} from "@stripe/stripe-js";

let stripeProise : Promise<Stripe | null>;

export const getStripe = () => {
    if(!stripeProise){
        stripeProise = loadStripe(
            process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
        );
    }

    return stripeProise;
};