import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ItConsultantComponent } from './it-consultant/it-consultant.component';
import { WebDevelopmentComponent } from './web-development/web-development.component';
import { AboutComponent } from './about/about.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsConditionComponent } from './terms-condition/terms-condition.component';
import { ContactComponent } from './contact/contact.component';
import { UiUxDesignComponent } from './ui-ux-design/ui-ux-design.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { GetQuoteComponent } from './get-quote/get-quote.component';
import { HealthcareComponent } from './healthcare/healthcare.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { LogisticComponent } from './logistic/logistic.component';
import { DigitalMarketingComponentComponent } from './digital-marketing.component/digital-marketing.component.component';
import { SeoComponentComponent } from './seo.component/seo.component.component';

export const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'mobile',
    component: ProductCardComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'it-consultant',
    component: ItConsultantComponent,
  },
  {
    path: 'web-development',
    component: WebDevelopmentComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'privacy-policy',
    component: PrivacyPolicyComponent,
  },
  {
    path: 'terms-condition',
    component: TermsConditionComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'ui-ux-design',
    component: UiUxDesignComponent
  },
  {
    path: 'insurance',
    component: InsuranceComponent
  },
  {
    path: 'quote',
    component: GetQuoteComponent
  },
  {
    path: 'healthCare',
    component: HealthcareComponent
  },
  {
    path: 'e-commerce',
    component: ECommerceComponent
  },
  {
    path: 'logistic',
    component: LogisticComponent
  },

  {
    path: 'digital-marketing',
    component: DigitalMarketingComponentComponent
  },

  {
    path: 'seo',
    component: SeoComponentComponent
  },
];
