import { AuthServiceConfig } from "angularx-social-login";
import { GoogleLoginProvider, FacebookLoginProvider, LinkedInLoginProvider } from "angularx-social-login";


let config = new AuthServiceConfig([
    {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider("577059691357-u8meqdfccn80fhmdq006f27tp9ll3fr9.apps.googleusercontent.com")
    },
    {
        id: FacebookLoginProvider.PROVIDER_ID,
        provider: new FacebookLoginProvider("303906227077436")
    },
    // {
    //     id: LinkedInLoginProvider.PROVIDER_ID,
    //     provider: new LinkedInLoginProvider("LinkedIn-client-Id", false, 'en_US')
    // }
]);

export function provideConfig() {
    return config;
}