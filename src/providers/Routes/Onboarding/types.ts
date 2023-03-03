export type TOnboardingStack = {
    Phone: undefined;
    Confirmation: {
        sendTo: string;
        type: 'phone' | 'email' | 'none';
    }
};