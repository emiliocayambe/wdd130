import { injectQuery as __vite__injectQuery } from "/@vite/client";import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/main.js");import {
  ListarEmpresaComponent
} from "/chunk-YSS2RE3I.js";
import "/chunk-VHWM3SKP.js";
import {
  AuthService,
  auth_service_exports
} from "/chunk-D6UFLUV4.js";
import {
  environment
} from "/chunk-PNDPGZBD.js";
import {
  __export
} from "/chunk-EVSPGG2W.js";

// src/main.ts
import { bootstrapApplication } from "/@fs/Users/emiliocayambe/Documents/pos-sri-angular/frontend/.angular/cache/20.3.6/pos-sri-angular/vite/deps/@angular_platform-browser.js?v=435d668e";

// src/app/app.config.ts
import { LOCALE_ID, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from "/@fs/Users/emiliocayambe/Documents/pos-sri-angular/frontend/.angular/cache/20.3.6/pos-sri-angular/vite/deps/@angular_core.js?v=435d668e";
import { provideRouter } from "/@fs/Users/emiliocayambe/Documents/pos-sri-angular/frontend/.angular/cache/20.3.6/pos-sri-angular/vite/deps/@angular_router.js?v=435d668e";
import { provideHttpClient, withInterceptorsFromDi } from "/@fs/Users/emiliocayambe/Documents/pos-sri-angular/frontend/.angular/cache/20.3.6/pos-sri-angular/vite/deps/@angular_common_http.js?v=435d668e";
import { provideNativeDateAdapter } from "/@fs/Users/emiliocayambe/Documents/pos-sri-angular/frontend/.angular/cache/20.3.6/pos-sri-angular/vite/deps/@angular_material_core.js?v=435d668e";
import { HTTP_INTERCEPTORS } from "/@fs/Users/emiliocayambe/Documents/pos-sri-angular/frontend/.angular/cache/20.3.6/pos-sri-angular/vite/deps/@angular_common_http.js?v=435d668e";

// src/app/auth-interceptor.ts
import { Injectable } from "/@fs/Users/emiliocayambe/Documents/pos-sri-angular/frontend/.angular/cache/20.3.6/pos-sri-angular/vite/deps/@angular_core.js?v=435d668e";
import * as i0 from "/@fs/Users/emiliocayambe/Documents/pos-sri-angular/frontend/.angular/cache/20.3.6/pos-sri-angular/vite/deps/@angular_core.js?v=435d668e";
var AuthInterceptor = class _AuthInterceptor {
  intercept(req, next) {
    const token = localStorage.getItem("token");
    if (token) {
      const cloned = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
      return next.handle(cloned);
    }
    return next.handle(req);
  }
  static \u0275fac = function AuthInterceptor_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthInterceptor)();
  };
  static \u0275prov = /* @__PURE__ */ i0.\u0275\u0275defineInjectable({ token: _AuthInterceptor, factory: _AuthInterceptor.\u0275fac });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassMetadata(AuthInterceptor, [{
    type: Injectable
  }], null, null);
})();

// src/app/auth/login/login.ts
import { Component } from "/@fs/Users/emiliocayambe/Documents/pos-sri-angular/frontend/.angular/cache/20.3.6/pos-sri-angular/vite/deps/@angular_core.js?v=435d668e";
import { Validators } from "/@fs/Users/emiliocayambe/Documents/pos-sri-angular/frontend/.angular/cache/20.3.6/pos-sri-angular/vite/deps/@angular_forms.js?v=435d668e";
import { CommonModule } from "/@fs/Users/emiliocayambe/Documents/pos-sri-angular/frontend/.angular/cache/20.3.6/pos-sri-angular/vite/deps/@angular_common.js?v=435d668e";
import { ReactiveFormsModule } from "/@fs/Users/emiliocayambe/Documents/pos-sri-angular/frontend/.angular/cache/20.3.6/pos-sri-angular/vite/deps/@angular_forms.js?v=435d668e";
import Swal from "/@fs/Users/emiliocayambe/Documents/pos-sri-angular/frontend/.angular/cache/20.3.6/pos-sri-angular/vite/deps/sweetalert2.js?v=435d668e";
import * as i02 from "/@fs/Users/emiliocayambe/Documents/pos-sri-angular/frontend/.angular/cache/20.3.6/pos-sri-angular/vite/deps/@angular_core.js?v=435d668e";
import * as i1 from "/@fs/Users/emiliocayambe/Documents/pos-sri-angular/frontend/.angular/cache/20.3.6/pos-sri-angular/vite/deps/@angular_forms.js?v=435d668e";
import * as i3 from "/@fs/Users/emiliocayambe/Documents/pos-sri-angular/frontend/.angular/cache/20.3.6/pos-sri-angular/vite/deps/@angular_router.js?v=435d668e";
import * as i4 from "/@fs/Users/emiliocayambe/Documents/pos-sri-angular/frontend/.angular/cache/20.3.6/pos-sri-angular/vite/deps/@angular_common.js?v=435d668e";
function LoginComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    i02.\u0275\u0275elementStart(0, "div", 14);
    i02.\u0275\u0275text(1, " Ingresa un email v\xE1lido ");
    i02.\u0275\u0275elementEnd();
  }
}
function LoginComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    i02.\u0275\u0275elementStart(0, "div", 14);
    i02.\u0275\u0275text(1, " Contrase\xF1a incorrecta ");
    i02.\u0275\u0275elementEnd();
  }
}
var LoginComponent = class _LoginComponent {
  fb;
  authService;
  router;
  loginForm;
  mensaje = "";
  errorMessage = null;
  constructor(fb, authService, router) {
    this.fb = fb;
    this.authService = authService;
    this.router = router;
    this.loginForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]]
    });
  }
  login() {
    if (this.loginForm.invalid) {
      this.mensaje = "Por favor complete el formulario correctamente";
      return;
    }
    const { email, password } = this.loginForm.value;
    this.authService.login(email, password).subscribe({
      next: (res) => {
        this.mensaje = `Bienvenido, ${res.usuario.nombre}`;
        this.router.navigate(["/dashboard/admin"]);
      },
      error: (err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.error?.message || "Ocurri\xF3 un error inesperado",
          confirmButtonText: "Aceptar",
          customClass: {
            htmlContainer: "swal-text-red"
          }
        });
      }
    });
  }
  static \u0275fac = function LoginComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoginComponent)(i02.\u0275\u0275directiveInject(i1.FormBuilder), i02.\u0275\u0275directiveInject(AuthService), i02.\u0275\u0275directiveInject(i3.Router));
  };
  static \u0275cmp = /* @__PURE__ */ i02.\u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], decls: 22, vars: 4, consts: [[1, "bg-gray-50", "dark:bg-gray-900"], [1, "flex", "flex-col", "items-center", "justify-center", "px-6", "py-8", "mx-auto", "md:h-screen", "lg:py-0"], ["href", "#", 1, "flex", "items-center", "mb-6", "text-2xl", "font-semibold", "text-gray-900", "dark:text-white"], ["src", "assets/logo.jpg", "alt", "logo", 1, "w-16", "h-16", "mr-2"], [1, "w-full", "bg-white", "rounded-lg", "shadow", "dark:border", "md:mt-0", "sm:max-w-md", "xl:p-0", "dark:bg-gray-800", "dark:border-gray-700"], [1, "p-6", "space-y-4", "md:space-y-6", "sm:p-8"], [1, "text-xl", "font-bold", "leading-tight", "tracking-tight", "text-gray-900", "md:text-2xl", "dark:text-white"], [1, "space-y-4", "md:space-y-6", 3, "ngSubmit", "formGroup"], ["for", "email", 1, "block", "mb-2", "text-sm", "font-medium", "text-gray-900", "dark:text-white"], ["matInput", "", "type", "email", "formControlName", "email", "required", "", "type", "email", "name", "email", "id", "email", "placeholder", "tuemail@lamaga.ec", 1, "bg-gray-50", "border", "border-gray-300", "text-gray-900", "rounded-lg", "focus:ring-primary-600", "focus:border-primary-600", "block", "w-full", "p-2.5", "dark:bg-gray-700", "dark:border-gray-600", "dark:placeholder-gray-400", "dark:text-white", "dark:focus:ring-blue-500", "dark:focus:border-blue-500", "placeholder:opacity-30"], ["class", "mt-1 text-sm text-red-600 dark:text-red-400", 4, "ngIf"], ["for", "password", 1, "block", "mb-2", "text-sm", "font-medium", "text-gray-900", "dark:text-white"], ["matInput", "", "type", "password", "formControlName", "password", "required", "", "type", "password", "name", "password", "id", "password", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", 1, "bg-gray-50", "border", "border-gray-300", "text-gray-900", "rounded-lg", "focus:ring-primary-600", "focus:border-primary-600", "block", "w-full", "p-2.5", "dark:bg-gray-700", "dark:border-gray-600", "dark:placeholder-gray-400", "dark:text-white", "dark:focus:ring-blue-500", "dark:focus:border-blue-500", "placeholder:opacity-30"], ["type", "submit", 1, "bg-pink-500", "hover:bg-pink-600", "text-white", "font-bold", "py-2", "px-4", "rounded", "block", "w-full", 3, "disabled"], [1, "mt-1", "text-sm", "text-red-600", "dark:text-red-400"]], template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      i02.\u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "a", 2);
      i02.\u0275\u0275element(3, "img", 3);
      i02.\u0275\u0275text(4, " Lamaga Distribuciones ");
      i02.\u0275\u0275elementEnd();
      i02.\u0275\u0275elementStart(5, "div", 4)(6, "div", 5)(7, "h1", 6);
      i02.\u0275\u0275text(8, " Iniciar sesi\xF3n con tu cuenta ");
      i02.\u0275\u0275elementEnd();
      i02.\u0275\u0275elementStart(9, "form", 7);
      i02.\u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_9_listener() {
        return ctx.login();
      });
      i02.\u0275\u0275elementStart(10, "div")(11, "label", 8);
      i02.\u0275\u0275text(12, "Tu correo");
      i02.\u0275\u0275elementEnd();
      i02.\u0275\u0275element(13, "input", 9);
      i02.\u0275\u0275template(14, LoginComponent_div_14_Template, 2, 0, "div", 10);
      i02.\u0275\u0275elementEnd();
      i02.\u0275\u0275elementStart(15, "div")(16, "label", 11);
      i02.\u0275\u0275text(17, "Tu contrase\xF1a");
      i02.\u0275\u0275elementEnd();
      i02.\u0275\u0275element(18, "input", 12);
      i02.\u0275\u0275template(19, LoginComponent_div_19_Template, 2, 0, "div", 10);
      i02.\u0275\u0275elementEnd();
      i02.\u0275\u0275elementStart(20, "button", 13);
      i02.\u0275\u0275text(21, "Ingresar");
      i02.\u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      let tmp_1_0;
      let tmp_2_0;
      i02.\u0275\u0275advance(9);
      i02.\u0275\u0275property("formGroup", ctx.loginForm);
      i02.\u0275\u0275advance(5);
      i02.\u0275\u0275property("ngIf", (tmp_1_0 = ctx.loginForm.get("email")) == null ? null : tmp_1_0.hasError("email"));
      i02.\u0275\u0275advance(5);
      i02.\u0275\u0275property("ngIf", (tmp_2_0 = ctx.loginForm.get("password")) == null ? null : tmp_2_0.hasError("required"));
      i02.\u0275\u0275advance();
      i02.\u0275\u0275property("disabled", ctx.loginForm.invalid);
    }
  }, dependencies: [CommonModule, i4.NgClass, i4.NgComponentOutlet, i4.NgForOf, i4.NgIf, i4.NgTemplateOutlet, i4.NgStyle, i4.NgSwitch, i4.NgSwitchCase, i4.NgSwitchDefault, i4.NgPlural, i4.NgPluralCase, ReactiveFormsModule, i1.\u0275NgNoValidate, i1.NgSelectOption, i1.\u0275NgSelectMultipleOption, i1.DefaultValueAccessor, i1.NumberValueAccessor, i1.RangeValueAccessor, i1.CheckboxControlValueAccessor, i1.SelectControlValueAccessor, i1.SelectMultipleControlValueAccessor, i1.RadioControlValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.RequiredValidator, i1.MinLengthValidator, i1.MaxLengthValidator, i1.PatternValidator, i1.CheckboxRequiredValidator, i1.EmailValidator, i1.MinValidator, i1.MaxValidator, i1.FormControlDirective, i1.FormGroupDirective, i1.FormControlName, i1.FormGroupName, i1.FormArrayName, i4.AsyncPipe, i4.UpperCasePipe, i4.LowerCasePipe, i4.JsonPipe, i4.SlicePipe, i4.DecimalPipe, i4.PercentPipe, i4.TitleCasePipe, i4.CurrencyPipe, i4.DatePipe, i4.I18nPluralPipe, i4.I18nSelectPipe, i4.KeyValuePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i02.\u0275setClassMetadata(LoginComponent, [{
    type: Component,
    args: [{ standalone: true, imports: [CommonModule, ReactiveFormsModule], selector: "app-login", template: `\r
<section class="bg-gray-50 dark:bg-gray-900">\r
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">\r
      <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">\r
          <img class="w-16 h-16 mr-2" src="assets/logo.jpg" alt="logo">\r
          Lamaga Distribuciones    \r
      </a>\r
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">\r
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">\r
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">\r
                  Iniciar sesi\xF3n con tu cuenta\r
              </h1>\r
              <form [formGroup]="loginForm" (ngSubmit)="login()" class="space-y-4 md:space-y-6" >\r
                  <div>\r
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tu correo</label>\r
                      <input matInput type="email" formControlName="email" required  type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder:opacity-30" placeholder="tuemail@lamaga.ec">\r
                        <div *ngIf="loginForm.get('email')?.hasError('email')" class="mt-1 text-sm text-red-600 dark:text-red-400">\r
                            Ingresa un email v\xE1lido\r
                        </div>\r
                    </div>\r
                  <div>\r
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tu contrase\xF1a</label>\r
                      <input matInput type="password" formControlName="password" required type="password" name="password" id="password" placeholder="\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder:opacity-30" >\r
                        <div *ngIf="loginForm.get('password')?.hasError('required')" class="mt-1 text-sm text-red-600 dark:text-red-400">\r
                            Contrase\xF1a incorrecta\r
                        </div>\r
                        \r
                      </div>\r
                  <button  type="submit" class="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded block w-full" [disabled]="loginForm.invalid">Ingresar</button>\r
              </form>\r
          </div>\r
      </div>\r
  </div>\r
</section>` }]
  }], () => [{ type: i1.FormBuilder }, { type: AuthService }, { type: i3.Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i02.\u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src/app/auth/login/login.ts", lineNumber: 18 });
})();
(() => {
  const id = "src%2Fapp%2Fauth%2Flogin%2Flogin.ts%40LoginComponent";
  function LoginComponent_HmrLoad(t) {
    import(
      /* @vite-ignore */
      __vite__injectQuery(i02.\u0275\u0275getReplaceMetadataURL(id, t, import.meta.url), 'import')
    ).then((m) => m.default && i02.\u0275\u0275replaceMetadata(LoginComponent, m.default, [i02, i4, i1, auth_service_exports, i3], [CommonModule, ReactiveFormsModule, Component], import.meta, id));
  }
  (typeof ngDevMode === "undefined" || ngDevMode) && LoginComponent_HmrLoad(Date.now());
  (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && LoginComponent_HmrLoad(d.timestamp)));
})();

// src/app/layout/dashboard.ts
import { CommonModule as CommonModule2 } from "/@fs/Users/emiliocayambe/Documents/pos-sri-angular/frontend/.angular/cache/20.3.6/pos-sri-angular/vite/deps/@angular_common.js?v=435d668e";
import { Component as Component2, HostListener } from "/@fs/Users/emiliocayambe/Documents/pos-sri-angular/frontend/.angular/cache/20.3.6/pos-sri-angular/vite/deps/@angular_core.js?v=435d668e";
import { RouterModule, RouterOutlet } from "/@fs/Users/emiliocayambe/Documents/pos-sri-angular/frontend/.angular/cache/20.3.6/pos-sri-angular/vite/deps/@angular_router.js?v=435d668e";
import * as i03 from "/@fs/Users/emiliocayambe/Documents/pos-sri-angular/frontend/.angular/cache/20.3.6/pos-sri-angular/vite/deps/@angular_core.js?v=435d668e";
import * as i2 from "/@fs/Users/emiliocayambe/Documents/pos-sri-angular/frontend/.angular/cache/20.3.6/pos-sri-angular/vite/deps/@angular_router.js?v=435d668e";
import * as i32 from "/@fs/Users/emiliocayambe/Documents/pos-sri-angular/frontend/.angular/cache/20.3.6/pos-sri-angular/vite/deps/@angular_common.js?v=435d668e";
function DashboardComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = i03.\u0275\u0275getCurrentView();
    i03.\u0275\u0275elementStart(0, "div", 32);
    i03.\u0275\u0275listener("click", function DashboardComponent_div_1_Template_div_click_0_listener() {
      i03.\u0275\u0275restoreView(_r1);
      const ctx_r1 = i03.\u0275\u0275nextContext();
      return i03.\u0275\u0275resetView(ctx_r1.toggleSidebar());
    });
    i03.\u0275\u0275elementEnd();
  }
}
function DashboardComponent_span_5_Template(rf, ctx) {
  if (rf & 1) {
    i03.\u0275\u0275elementStart(0, "span", 33);
    i03.\u0275\u0275text(1, "POS");
    i03.\u0275\u0275elementEnd();
  }
}
function DashboardComponent_Conditional_7_span_3_Template(rf, ctx) {
  if (rf & 1) {
    i03.\u0275\u0275elementStart(0, "span", 36);
    i03.\u0275\u0275text(1, "Usuarios");
    i03.\u0275\u0275elementEnd();
  }
}
function DashboardComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = i03.\u0275\u0275getCurrentView();
    i03.\u0275\u0275elementStart(0, "a", 34);
    i03.\u0275\u0275listener("click", function DashboardComponent_Conditional_7_Template_a_click_0_listener() {
      i03.\u0275\u0275restoreView(_r3);
      const ctx_r1 = i03.\u0275\u0275nextContext();
      return i03.\u0275\u0275resetView(ctx_r1.closeOnMobile());
    });
    i03.\u0275\u0275elementStart(1, "span", 35);
    i03.\u0275\u0275text(2, "people");
    i03.\u0275\u0275elementEnd();
    i03.\u0275\u0275template(3, DashboardComponent_Conditional_7_span_3_Template, 2, 0, "span", 11);
    i03.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = i03.\u0275\u0275nextContext();
    i03.\u0275\u0275advance(3);
    i03.\u0275\u0275property("ngIf", ctx_r1.opened);
  }
}
function DashboardComponent_Conditional_8_span_3_Template(rf, ctx) {
  if (rf & 1) {
    i03.\u0275\u0275elementStart(0, "span", 36);
    i03.\u0275\u0275text(1, "Empresa");
    i03.\u0275\u0275elementEnd();
  }
}
function DashboardComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = i03.\u0275\u0275getCurrentView();
    i03.\u0275\u0275elementStart(0, "a", 37);
    i03.\u0275\u0275listener("click", function DashboardComponent_Conditional_8_Template_a_click_0_listener() {
      i03.\u0275\u0275restoreView(_r4);
      const ctx_r1 = i03.\u0275\u0275nextContext();
      return i03.\u0275\u0275resetView(ctx_r1.closeOnMobile());
    });
    i03.\u0275\u0275elementStart(1, "span", 38);
    i03.\u0275\u0275text(2, "apartment");
    i03.\u0275\u0275elementEnd();
    i03.\u0275\u0275template(3, DashboardComponent_Conditional_8_span_3_Template, 2, 0, "span", 11);
    i03.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = i03.\u0275\u0275nextContext();
    i03.\u0275\u0275advance(3);
    i03.\u0275\u0275property("ngIf", ctx_r1.opened);
  }
}
function DashboardComponent_span_12_Template(rf, ctx) {
  if (rf & 1) {
    i03.\u0275\u0275elementStart(0, "span", 36);
    i03.\u0275\u0275text(1, "Clientes");
    i03.\u0275\u0275elementEnd();
  }
}
function DashboardComponent_span_16_Template(rf, ctx) {
  if (rf & 1) {
    i03.\u0275\u0275elementStart(0, "span", 36);
    i03.\u0275\u0275text(1, "Productos");
    i03.\u0275\u0275elementEnd();
  }
}
function DashboardComponent_span_21_Template(rf, ctx) {
  if (rf & 1) {
    i03.\u0275\u0275elementStart(0, "span", 39);
    i03.\u0275\u0275text(1, "Transacciones");
    i03.\u0275\u0275elementEnd();
  }
}
function DashboardComponent_span_22_Template(rf, ctx) {
  if (rf & 1) {
    i03.\u0275\u0275elementStart(0, "span", 22);
    i03.\u0275\u0275text(1);
    i03.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = i03.\u0275\u0275nextContext();
    i03.\u0275\u0275advance();
    i03.\u0275\u0275textInterpolate1(" ", ctx_r1.grupoTransaccionesOpen ? "expand_less" : "expand_more", " ");
  }
}
function DashboardComponent_div_23_span_4_Template(rf, ctx) {
  if (rf & 1) {
    i03.\u0275\u0275elementStart(0, "span");
    i03.\u0275\u0275text(1, "Caja");
    i03.\u0275\u0275elementEnd();
  }
}
function DashboardComponent_div_23_span_5_Template(rf, ctx) {
  if (rf & 1) {
    i03.\u0275\u0275elementStart(0, "span");
    i03.\u0275\u0275text(1, "Caja");
    i03.\u0275\u0275elementEnd();
  }
}
function DashboardComponent_div_23_span_9_Template(rf, ctx) {
  if (rf & 1) {
    i03.\u0275\u0275elementStart(0, "span");
    i03.\u0275\u0275text(1, "Cotizaciones");
    i03.\u0275\u0275elementEnd();
  }
}
function DashboardComponent_div_23_span_10_Template(rf, ctx) {
  if (rf & 1) {
    i03.\u0275\u0275elementStart(0, "span");
    i03.\u0275\u0275text(1, "Cotizaciones");
    i03.\u0275\u0275elementEnd();
  }
}
function DashboardComponent_div_23_span_14_Template(rf, ctx) {
  if (rf & 1) {
    i03.\u0275\u0275elementStart(0, "span");
    i03.\u0275\u0275text(1, "Facturas");
    i03.\u0275\u0275elementEnd();
  }
}
function DashboardComponent_div_23_span_15_Template(rf, ctx) {
  if (rf & 1) {
    i03.\u0275\u0275elementStart(0, "span");
    i03.\u0275\u0275text(1, "Facturas");
    i03.\u0275\u0275elementEnd();
  }
}
function DashboardComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    i03.\u0275\u0275elementStart(0, "div", 40)(1, "a", 41)(2, "span", 42);
    i03.\u0275\u0275text(3, "point_of_sale");
    i03.\u0275\u0275elementEnd();
    i03.\u0275\u0275template(4, DashboardComponent_div_23_span_4_Template, 2, 0, "span", 43)(5, DashboardComponent_div_23_span_5_Template, 2, 0, "span", 43);
    i03.\u0275\u0275elementEnd();
    i03.\u0275\u0275elementStart(6, "a", 44)(7, "span", 45);
    i03.\u0275\u0275text(8, "request_quote");
    i03.\u0275\u0275elementEnd();
    i03.\u0275\u0275template(9, DashboardComponent_div_23_span_9_Template, 2, 0, "span", 43)(10, DashboardComponent_div_23_span_10_Template, 2, 0, "span", 43);
    i03.\u0275\u0275elementEnd();
    i03.\u0275\u0275elementStart(11, "a", 46)(12, "span", 47);
    i03.\u0275\u0275text(13, "receipt_long");
    i03.\u0275\u0275elementEnd();
    i03.\u0275\u0275template(14, DashboardComponent_div_23_span_14_Template, 2, 0, "span", 43)(15, DashboardComponent_div_23_span_15_Template, 2, 0, "span", 43);
    i03.\u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = i03.\u0275\u0275nextContext();
    i03.\u0275\u0275property("ngClass", ctx_r1.opened ? "pl-10 mt-1" : "absolute left-full top-0 mt-0 w-44 bg-white shadow-lg rounded z-50 p-2");
    i03.\u0275\u0275advance(4);
    i03.\u0275\u0275property("ngIf", ctx_r1.opened);
    i03.\u0275\u0275advance();
    i03.\u0275\u0275property("ngIf", !ctx_r1.opened);
    i03.\u0275\u0275advance(4);
    i03.\u0275\u0275property("ngIf", ctx_r1.opened);
    i03.\u0275\u0275advance();
    i03.\u0275\u0275property("ngIf", !ctx_r1.opened);
    i03.\u0275\u0275advance(4);
    i03.\u0275\u0275property("ngIf", ctx_r1.opened);
    i03.\u0275\u0275advance();
    i03.\u0275\u0275property("ngIf", !ctx_r1.opened);
  }
}
function DashboardComponent_span_28_Template(rf, ctx) {
  if (rf & 1) {
    i03.\u0275\u0275elementStart(0, "span", 39);
    i03.\u0275\u0275text(1, "Reportes");
    i03.\u0275\u0275elementEnd();
  }
}
function DashboardComponent_span_29_Template(rf, ctx) {
  if (rf & 1) {
    i03.\u0275\u0275elementStart(0, "span", 22);
    i03.\u0275\u0275text(1);
    i03.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = i03.\u0275\u0275nextContext();
    i03.\u0275\u0275advance();
    i03.\u0275\u0275textInterpolate1(" ", ctx_r1.grupoReportesOpen ? "expand_less" : "expand_more", " ");
  }
}
function DashboardComponent_div_30_span_4_Template(rf, ctx) {
  if (rf & 1) {
    i03.\u0275\u0275elementStart(0, "span");
    i03.\u0275\u0275text(1, "Mensuales");
    i03.\u0275\u0275elementEnd();
  }
}
function DashboardComponent_div_30_span_5_Template(rf, ctx) {
  if (rf & 1) {
    i03.\u0275\u0275elementStart(0, "span");
    i03.\u0275\u0275text(1, "Mensuales");
    i03.\u0275\u0275elementEnd();
  }
}
function DashboardComponent_div_30_span_9_Template(rf, ctx) {
  if (rf & 1) {
    i03.\u0275\u0275elementStart(0, "span");
    i03.\u0275\u0275text(1, "Por asesor");
    i03.\u0275\u0275elementEnd();
  }
}
function DashboardComponent_div_30_span_10_Template(rf, ctx) {
  if (rf & 1) {
    i03.\u0275\u0275elementStart(0, "span");
    i03.\u0275\u0275text(1, "Por asesor");
    i03.\u0275\u0275elementEnd();
  }
}
function DashboardComponent_div_30_span_14_Template(rf, ctx) {
  if (rf & 1) {
    i03.\u0275\u0275elementStart(0, "span");
    i03.\u0275\u0275text(1, "Anuales");
    i03.\u0275\u0275elementEnd();
  }
}
function DashboardComponent_div_30_span_15_Template(rf, ctx) {
  if (rf & 1) {
    i03.\u0275\u0275elementStart(0, "span");
    i03.\u0275\u0275text(1, "Anuales");
    i03.\u0275\u0275elementEnd();
  }
}
function DashboardComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    i03.\u0275\u0275elementStart(0, "div", 40)(1, "a", 48)(2, "span", 42);
    i03.\u0275\u0275text(3, "payments");
    i03.\u0275\u0275elementEnd();
    i03.\u0275\u0275template(4, DashboardComponent_div_30_span_4_Template, 2, 0, "span", 43)(5, DashboardComponent_div_30_span_5_Template, 2, 0, "span", 43);
    i03.\u0275\u0275elementEnd();
    i03.\u0275\u0275elementStart(6, "a", 49)(7, "span", 45);
    i03.\u0275\u0275text(8, "person_search");
    i03.\u0275\u0275elementEnd();
    i03.\u0275\u0275template(9, DashboardComponent_div_30_span_9_Template, 2, 0, "span", 43)(10, DashboardComponent_div_30_span_10_Template, 2, 0, "span", 43);
    i03.\u0275\u0275elementEnd();
    i03.\u0275\u0275elementStart(11, "a", 50)(12, "span", 47);
    i03.\u0275\u0275text(13, "bar_chart");
    i03.\u0275\u0275elementEnd();
    i03.\u0275\u0275template(14, DashboardComponent_div_30_span_14_Template, 2, 0, "span", 43)(15, DashboardComponent_div_30_span_15_Template, 2, 0, "span", 43);
    i03.\u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = i03.\u0275\u0275nextContext();
    i03.\u0275\u0275property("ngClass", ctx_r1.opened ? "pl-10 mt-1" : "absolute left-full top-0 mt-0 w-44 bg-white shadow-lg rounded z-50 p-2");
    i03.\u0275\u0275advance(4);
    i03.\u0275\u0275property("ngIf", ctx_r1.opened);
    i03.\u0275\u0275advance();
    i03.\u0275\u0275property("ngIf", !ctx_r1.opened);
    i03.\u0275\u0275advance(4);
    i03.\u0275\u0275property("ngIf", ctx_r1.opened);
    i03.\u0275\u0275advance();
    i03.\u0275\u0275property("ngIf", !ctx_r1.opened);
    i03.\u0275\u0275advance(4);
    i03.\u0275\u0275property("ngIf", ctx_r1.opened);
    i03.\u0275\u0275advance();
    i03.\u0275\u0275property("ngIf", !ctx_r1.opened);
  }
}
function DashboardComponent_span_35_Template(rf, ctx) {
  if (rf & 1) {
    i03.\u0275\u0275elementStart(0, "span", 51);
    i03.\u0275\u0275text(1, "Colapsar");
    i03.\u0275\u0275elementEnd();
  }
}
function DashboardComponent_div_47_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = i03.\u0275\u0275getCurrentView();
    i03.\u0275\u0275elementStart(0, "div", 55)(1, "button", 56);
    i03.\u0275\u0275listener("click", function DashboardComponent_div_47_div_7_Template_button_click_1_listener() {
      i03.\u0275\u0275restoreView(_r6);
      const ctx_r1 = i03.\u0275\u0275nextContext(2);
      return i03.\u0275\u0275resetView(ctx_r1.logout());
    });
    i03.\u0275\u0275text(2, "Cerrar sesi\xF3n");
    i03.\u0275\u0275elementEnd()();
  }
}
function DashboardComponent_div_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = i03.\u0275\u0275getCurrentView();
    i03.\u0275\u0275elementStart(0, "div", 26)(1, "div", 51);
    i03.\u0275\u0275text(2);
    i03.\u0275\u0275elementEnd();
    i03.\u0275\u0275elementStart(3, "div", 52)(4, "button", 53);
    i03.\u0275\u0275listener("click", function DashboardComponent_div_47_Template_button_click_4_listener() {
      i03.\u0275\u0275restoreView(_r5);
      const ctx_r1 = i03.\u0275\u0275nextContext();
      return i03.\u0275\u0275resetView(ctx_r1.profileOpen = !ctx_r1.profileOpen);
    });
    i03.\u0275\u0275elementStart(5, "span", 22);
    i03.\u0275\u0275text(6, "account_circle");
    i03.\u0275\u0275elementEnd()();
    i03.\u0275\u0275template(7, DashboardComponent_div_47_div_7_Template, 3, 0, "div", 54);
    i03.\u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = i03.\u0275\u0275nextContext();
    i03.\u0275\u0275advance(2);
    i03.\u0275\u0275textInterpolate(ctx_r1.user.email);
    i03.\u0275\u0275advance(5);
    i03.\u0275\u0275property("ngIf", ctx_r1.profileOpen);
  }
}
var DashboardComponent = class _DashboardComponent {
  authService;
  router;
  opened = true;
  isMobile = false;
  user = null;
  grupoTransaccionesOpen = false;
  grupoReportesOpen = false;
  profileOpen = false;
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
    this.checkScreenSize();
  }
  ngOnInit() {
    this.user = this.authService.getUsuarioActual();
  }
  checkScreenSize() {
    this.isMobile = window.innerWidth < 768;
    this.opened = !this.isMobile;
  }
  toggleSidebar() {
    this.opened = !this.opened;
  }
  // cerrar el sidebar si estamos en móvil (llamar desde cada link)
  closeOnMobile() {
    if (this.isMobile) {
      this.opened = false;
    }
    this.profileOpen = false;
  }
  logout() {
    this.authService.logout();
    this.router.navigate(["/login"]);
  }
  static \u0275fac = function DashboardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DashboardComponent)(i03.\u0275\u0275directiveInject(AuthService), i03.\u0275\u0275directiveInject(i2.Router));
  };
  static \u0275cmp = /* @__PURE__ */ i03.\u0275\u0275defineComponent({ type: _DashboardComponent, selectors: [["app-dashboard"]], hostBindings: function DashboardComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      i03.\u0275\u0275listener("resize", function DashboardComponent_resize_HostBindingHandler() {
        return ctx.checkScreenSize();
      }, i03.\u0275\u0275resolveWindow);
    }
  }, decls: 50, vars: 19, consts: [[1, "flex", "h-screen", "bg-gray-50"], ["class", "fixed inset-0 bg-black bg-opacity-40 z-20 md:hidden", "aria-hidden", "true", 3, "click", 4, "ngIf"], ["aria-label", "Sidebar", 1, "bg-white", "border-r", "border-gray-200", "flex", "flex-col", "transition-all", "duration-300", "z-30", 3, "ngClass"], ["routerLink", "/dashboard/admin", 1, "h-16", "flex", "items-center", "justify-center", "border-b", "border-gray-200", "px-2"], ["src", "assets/logo.jpg", "alt", "Logo", 1, "h-10", "object-contain"], ["class", "ml-2 font-semibold text-pink-500", 4, "ngIf"], ["role", "navigation", 1, "flex-1", "overflow-y-auto", "p-2"], ["routerLink", "/dashboard/usuarios", "routerLinkActive", "bg-blue-50 text-blue-700", 1, "flex", "items-center", "gap-3", "px-3", "py-2", "mb-1", "rounded-md", "hover:bg-pink-50", "transition-colors", "text-gray-700"], ["routerLink", "/dashboard/lista-empresa", "routerLinkActive", "bg-blue-50 text-blue-700", 1, "flex", "items-center", "gap-3", "px-3", "py-2", "mb-1", "rounded-md", "hover:bg-pink-50", "transition-colors", "text-gray-700"], ["routerLink", "/dashboard/clientes", "routerLinkActive", "bg-blue-50 text-blue-700", 1, "flex", "items-center", "gap-3", "px-3", "py-2", "mb-1", "rounded-md", "hover:bg-pink-50", "transition-colors", "text-gray-700", 3, "click"], [1, "material-icons", "text-purple-600"], ["class", "truncate", 4, "ngIf"], ["routerLink", "/dashboard/productos", "routerLinkActive", "bg-blue-50 text-blue-700", 1, "flex", "items-center", "gap-3", "px-3", "py-2", "mb-1", "rounded-md", "hover:bg-pink-50", "transition-colors", "text-gray-700", 3, "click"], [1, "material-icons", "text-orange-600"], [1, "mt-2", "relative"], [1, "w-full", "flex", "items-center", "gap-3", "px-3", "py-2", "rounded-md", "hover:bg-pink-50", "transition-colors", "text-gray-700", 3, "click"], [1, "material-icons", "text-red-600"], ["class", "flex-1 text-left", 4, "ngIf"], ["class", "material-icons", 4, "ngIf"], [3, "ngClass", 4, "ngIf"], [1, "border-t", "border-gray-100", "p-2"], [1, "w-full", "flex", "items-center", "justify-center", "gap-2", "px-2", "py-2", "rounded-md", "hover:bg-gray-100", 3, "click"], [1, "material-icons"], ["class", "text-sm", 4, "ngIf"], [1, "flex-1", "flex", "flex-col"], [1, "h-16", "bg-pink-500", "text-white", "flex", "items-center", "justify-between", "px-4", "shadow-sm"], [1, "flex", "items-center", "gap-3"], [1, "p-2", "rounded-md", "md:hidden", "bg-blue-700/20", "hover:bg-blue-700/30", 3, "click"], [1, "hidden", "md:flex", "items-center", "gap-3"], [1, "font-semibold"], ["class", "flex items-center gap-3", 4, "ngIf"], [1, "flex-1", "overflow-auto", "p-4"], ["aria-hidden", "true", 1, "fixed", "inset-0", "bg-black", "bg-opacity-40", "z-20", "md:hidden", 3, "click"], [1, "ml-2", "font-semibold", "text-pink-500"], ["routerLink", "/dashboard/usuarios", "routerLinkActive", "bg-blue-50 text-blue-700", 1, "flex", "items-center", "gap-3", "px-3", "py-2", "mb-1", "rounded-md", "hover:bg-pink-50", "transition-colors", "text-gray-700", 3, "click"], [1, "material-icons", "text-blue-600"], [1, "truncate"], ["routerLink", "/dashboard/lista-empresa", "routerLinkActive", "bg-blue-50 text-blue-700", 1, "flex", "items-center", "gap-3", "px-3", "py-2", "mb-1", "rounded-md", "hover:bg-pink-50", "transition-colors", "text-gray-700", 3, "click"], [1, "material-icons", "text-green-600"], [1, "flex-1", "text-left"], [3, "ngClass"], ["routerLink", "/dashboard/cajas", "routerLinkActive", "bg-blue-100 text-blue-700", 1, "flex", "items-center", "px-3", "py-2", "mb-1", "rounded-md", "hover:bg-blue-50", "text-gray-700"], [1, "material-icons", "mr-2", "text-yellow-600"], [4, "ngIf"], ["routerLink", "/dashboard/cotizaciones", "routerLinkActive", "bg-blue-100 text-blue-700", 1, "flex", "items-center", "px-3", "py-2", "mb-1", "rounded-md", "hover:bg-blue-50", "text-gray-700"], [1, "material-icons", "mr-2", "text-green-600"], ["routerLink", "/dashboard/facturas", "routerLinkActive", "bg-blue-100 text-blue-700", 1, "flex", "items-center", "px-3", "py-2", "mb-1", "rounded-md", "hover:bg-blue-50", "text-gray-700"], [1, "material-icons", "mr-2", "text-purple-600"], ["routerLink", "/dashboard/reportes/mensuales", "routerLinkActive", "bg-blue-100 text-blue-700", 1, "flex", "items-center", "px-3", "py-2", "mb-1", "rounded-md", "hover:bg-blue-50", "text-gray-700"], ["routerLink", "/dashboard/reportes/ventas", "routerLinkActive", "bg-blue-100 text-blue-700", 1, "flex", "items-center", "px-3", "py-2", "mb-1", "rounded-md", "hover:bg-blue-50", "text-gray-700"], ["routerLink", "/dashboard/anuales", "routerLinkActive", "bg-blue-100 text-blue-700", 1, "flex", "items-center", "px-3", "py-2", "mb-1", "rounded-md", "hover:bg-blue-50", "text-gray-700"], [1, "text-sm"], [1, "relative"], [1, "p-1", "rounded-full", "bg-blue-700/20", "hover:bg-blue-700/30", 3, "click"], ["class", "absolute right-0 mt-2 w-40 bg-white text-gray-800 rounded shadow-lg z-40", 4, "ngIf"], [1, "absolute", "right-0", "mt-2", "w-40", "bg-white", "text-gray-800", "rounded", "shadow-lg", "z-40"], [1, "w-full", "text-left", "px-3", "py-2", "hover:bg-gray-100", 3, "click"]], template: function DashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      i03.\u0275\u0275elementStart(0, "div", 0);
      i03.\u0275\u0275template(1, DashboardComponent_div_1_Template, 1, 0, "div", 1);
      i03.\u0275\u0275elementStart(2, "aside", 2)(3, "div", 3);
      i03.\u0275\u0275element(4, "img", 4);
      i03.\u0275\u0275template(5, DashboardComponent_span_5_Template, 2, 0, "span", 5);
      i03.\u0275\u0275elementEnd();
      i03.\u0275\u0275elementStart(6, "nav", 6);
      i03.\u0275\u0275conditionalCreate(7, DashboardComponent_Conditional_7_Template, 4, 1, "a", 7);
      i03.\u0275\u0275conditionalCreate(8, DashboardComponent_Conditional_8_Template, 4, 1, "a", 8);
      i03.\u0275\u0275elementStart(9, "a", 9);
      i03.\u0275\u0275listener("click", function DashboardComponent_Template_a_click_9_listener() {
        return ctx.closeOnMobile();
      });
      i03.\u0275\u0275elementStart(10, "span", 10);
      i03.\u0275\u0275text(11, "person");
      i03.\u0275\u0275elementEnd();
      i03.\u0275\u0275template(12, DashboardComponent_span_12_Template, 2, 0, "span", 11);
      i03.\u0275\u0275elementEnd();
      i03.\u0275\u0275elementStart(13, "a", 12);
      i03.\u0275\u0275listener("click", function DashboardComponent_Template_a_click_13_listener() {
        return ctx.closeOnMobile();
      });
      i03.\u0275\u0275elementStart(14, "span", 13);
      i03.\u0275\u0275text(15, "inventory_2");
      i03.\u0275\u0275elementEnd();
      i03.\u0275\u0275template(16, DashboardComponent_span_16_Template, 2, 0, "span", 11);
      i03.\u0275\u0275elementEnd();
      i03.\u0275\u0275elementStart(17, "div", 14)(18, "button", 15);
      i03.\u0275\u0275listener("click", function DashboardComponent_Template_button_click_18_listener() {
        return ctx.grupoTransaccionesOpen = !ctx.grupoTransaccionesOpen;
      });
      i03.\u0275\u0275elementStart(19, "span", 16);
      i03.\u0275\u0275text(20, "sync_alt");
      i03.\u0275\u0275elementEnd();
      i03.\u0275\u0275template(21, DashboardComponent_span_21_Template, 2, 0, "span", 17)(22, DashboardComponent_span_22_Template, 2, 1, "span", 18);
      i03.\u0275\u0275elementEnd();
      i03.\u0275\u0275template(23, DashboardComponent_div_23_Template, 16, 7, "div", 19);
      i03.\u0275\u0275elementEnd();
      i03.\u0275\u0275elementStart(24, "div", 14)(25, "button", 15);
      i03.\u0275\u0275listener("click", function DashboardComponent_Template_button_click_25_listener() {
        return ctx.grupoReportesOpen = !ctx.grupoReportesOpen;
      });
      i03.\u0275\u0275elementStart(26, "span", 16);
      i03.\u0275\u0275text(27, "trending_up");
      i03.\u0275\u0275elementEnd();
      i03.\u0275\u0275template(28, DashboardComponent_span_28_Template, 2, 0, "span", 17)(29, DashboardComponent_span_29_Template, 2, 1, "span", 18);
      i03.\u0275\u0275elementEnd();
      i03.\u0275\u0275template(30, DashboardComponent_div_30_Template, 16, 7, "div", 19);
      i03.\u0275\u0275elementEnd()();
      i03.\u0275\u0275elementStart(31, "div", 20)(32, "button", 21);
      i03.\u0275\u0275listener("click", function DashboardComponent_Template_button_click_32_listener() {
        return ctx.opened = !ctx.opened;
      });
      i03.\u0275\u0275elementStart(33, "span", 22);
      i03.\u0275\u0275text(34);
      i03.\u0275\u0275elementEnd();
      i03.\u0275\u0275template(35, DashboardComponent_span_35_Template, 2, 0, "span", 23);
      i03.\u0275\u0275elementEnd()()();
      i03.\u0275\u0275elementStart(36, "div", 24)(37, "header", 25)(38, "div", 26)(39, "button", 27);
      i03.\u0275\u0275listener("click", function DashboardComponent_Template_button_click_39_listener() {
        return ctx.toggleSidebar();
      });
      i03.\u0275\u0275elementStart(40, "span", 22);
      i03.\u0275\u0275text(41, "menu");
      i03.\u0275\u0275elementEnd()();
      i03.\u0275\u0275elementStart(42, "div", 28)(43, "span", 22);
      i03.\u0275\u0275text(44, "dashboard");
      i03.\u0275\u0275elementEnd();
      i03.\u0275\u0275elementStart(45, "span", 29);
      i03.\u0275\u0275text(46, "LA MAGA DISTRIBUCIONES");
      i03.\u0275\u0275elementEnd()()();
      i03.\u0275\u0275template(47, DashboardComponent_div_47_Template, 8, 2, "div", 30);
      i03.\u0275\u0275elementEnd();
      i03.\u0275\u0275elementStart(48, "main", 31);
      i03.\u0275\u0275element(49, "router-outlet");
      i03.\u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      i03.\u0275\u0275advance();
      i03.\u0275\u0275property("ngIf", ctx.isMobile && ctx.opened);
      i03.\u0275\u0275advance();
      i03.\u0275\u0275property("ngClass", ctx.opened ? "w-56" : "w-16");
      i03.\u0275\u0275advance(3);
      i03.\u0275\u0275property("ngIf", ctx.opened);
      i03.\u0275\u0275advance(2);
      i03.\u0275\u0275conditional(ctx.authService.esAdmin() || ctx.authService.esCajero() ? 7 : -1);
      i03.\u0275\u0275advance();
      i03.\u0275\u0275conditional(ctx.authService.esAdmin() ? 8 : -1);
      i03.\u0275\u0275advance(4);
      i03.\u0275\u0275property("ngIf", ctx.opened);
      i03.\u0275\u0275advance(4);
      i03.\u0275\u0275property("ngIf", ctx.opened);
      i03.\u0275\u0275advance(2);
      i03.\u0275\u0275attribute("aria-expanded", ctx.grupoTransaccionesOpen);
      i03.\u0275\u0275advance(3);
      i03.\u0275\u0275property("ngIf", ctx.opened);
      i03.\u0275\u0275advance();
      i03.\u0275\u0275property("ngIf", ctx.opened);
      i03.\u0275\u0275advance();
      i03.\u0275\u0275property("ngIf", ctx.grupoTransaccionesOpen);
      i03.\u0275\u0275advance(2);
      i03.\u0275\u0275attribute("aria-expanded", ctx.grupoReportesOpen);
      i03.\u0275\u0275advance(3);
      i03.\u0275\u0275property("ngIf", ctx.opened);
      i03.\u0275\u0275advance();
      i03.\u0275\u0275property("ngIf", ctx.opened);
      i03.\u0275\u0275advance();
      i03.\u0275\u0275property("ngIf", ctx.grupoReportesOpen);
      i03.\u0275\u0275advance(2);
      i03.\u0275\u0275attribute("aria-pressed", ctx.opened);
      i03.\u0275\u0275advance(2);
      i03.\u0275\u0275textInterpolate(ctx.opened ? "chevron_left" : "chevron_right");
      i03.\u0275\u0275advance();
      i03.\u0275\u0275property("ngIf", ctx.opened);
      i03.\u0275\u0275advance(12);
      i03.\u0275\u0275property("ngIf", ctx.user);
    }
  }, dependencies: [
    CommonModule2,
    i32.NgClass,
    i32.NgComponentOutlet,
    i32.NgForOf,
    i32.NgIf,
    i32.NgTemplateOutlet,
    i32.NgStyle,
    i32.NgSwitch,
    i32.NgSwitchCase,
    i32.NgSwitchDefault,
    i32.NgPlural,
    i32.NgPluralCase,
    RouterOutlet,
    RouterModule,
    i2.RouterLink,
    i2.RouterLinkActive,
    i2.\u0275EmptyOutletComponent,
    i32.AsyncPipe,
    i32.UpperCasePipe,
    i32.LowerCasePipe,
    i32.JsonPipe,
    i32.SlicePipe,
    i32.DecimalPipe,
    i32.PercentPipe,
    i32.TitleCasePipe,
    i32.CurrencyPipe,
    i32.DatePipe,
    i32.I18nPluralPipe,
    i32.I18nSelectPipe,
    i32.KeyValuePipe
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i03.\u0275setClassMetadata(DashboardComponent, [{
    type: Component2,
    args: [{ selector: "app-dashboard", standalone: true, imports: [
      CommonModule2,
      RouterOutlet,
      RouterModule
    ], template: `<!-- dashboard.component.html -->\r
<!-- Requiere Tailwind en el proyecto y (opcional) Material Icons si quieres usar esos \xEDconos -->\r
<div class="flex h-screen bg-gray-50">\r
\r
  <!-- Overlay (solo en m\xF3vil cuando el sidebar est\xE1 abierto) -->\r
  <div\r
    *ngIf="isMobile && opened"\r
    (click)="toggleSidebar()"\r
    class="fixed inset-0 bg-black bg-opacity-40 z-20 md:hidden"\r
    aria-hidden="true"\r
  ></div>\r
\r
  <!-- SIDEBAR -->\r
  <aside\r
    class="bg-white border-r border-gray-200 flex flex-col transition-all duration-300 z-30"\r
    [ngClass]="opened ? 'w-56' : 'w-16'"\r
    aria-label="Sidebar"\r
  >\r
    <!-- Logo / header -->\r
    <div routerLink="/dashboard/admin"  class="h-16 flex items-center justify-center border-b border-gray-200 px-2">\r
      <img src="assets/logo.jpg" alt="Logo" class="h-10 object-contain" />\r
      <span *ngIf="opened" class="ml-2 font-semibold text-pink-500">POS</span>\r
    </div>\r
\r
    <!-- Menu -->\r
    <nav class="flex-1 overflow-y-auto p-2" role="navigation">\r
      @if (authService.esAdmin() || authService.esCajero()  ) {\r
      <a\r
        routerLink="/dashboard/usuarios"\r
        routerLinkActive="bg-blue-50 text-blue-700"\r
        class="flex items-center gap-3 px-3 py-2 mb-1 rounded-md hover:bg-pink-50 transition-colors text-gray-700"\r
        (click)="closeOnMobile()"\r
      >\r
        <span class="material-icons text-blue-600">people</span>\r
        <span *ngIf="opened" class="truncate">Usuarios</span>\r
      </a>\r
    }\r
      @if (authService.esAdmin()) {\r
      <a\r
        routerLink="/dashboard/lista-empresa"\r
        routerLinkActive="bg-blue-50 text-blue-700"\r
        class="flex items-center gap-3 px-3 py-2 mb-1 rounded-md hover:bg-pink-50 transition-colors text-gray-700"\r
        (click)="closeOnMobile()"\r
      >\r
        <span class="material-icons text-green-600">apartment</span>\r
        <span *ngIf="opened" class="truncate">Empresa</span>\r
      </a>\r
    }\r
      <a\r
        routerLink="/dashboard/clientes"\r
        routerLinkActive="bg-blue-50 text-blue-700"\r
        class="flex items-center gap-3 px-3 py-2 mb-1 rounded-md hover:bg-pink-50 transition-colors text-gray-700"\r
        (click)="closeOnMobile()"\r
      >\r
        <span class="material-icons text-purple-600">person</span>\r
        <span *ngIf="opened" class="truncate">Clientes</span>\r
      </a>\r
\r
      <a\r
        routerLink="/dashboard/productos"\r
        routerLinkActive="bg-blue-50 text-blue-700"\r
        class="flex items-center gap-3 px-3 py-2 mb-1 rounded-md hover:bg-pink-50 transition-colors text-gray-700"\r
        (click)="closeOnMobile()"\r
      >\r
        <span class="material-icons text-orange-600">inventory_2</span>\r
        <span *ngIf="opened" class="truncate">Productos</span>\r
      </a>\r
\r
 <!-- Transacciones -->\r
<div class="mt-2 relative">\r
  <button\r
    (click)="grupoTransaccionesOpen = !grupoTransaccionesOpen"\r
    class="w-full flex items-center gap-3 px-3 py-2 rounded-md hover:bg-pink-50 transition-colors text-gray-700"\r
    [attr.aria-expanded]="grupoTransaccionesOpen"\r
  >\r
    <span class="material-icons text-red-600">sync_alt</span>\r
    <span *ngIf="opened" class="flex-1 text-left">Transacciones</span>\r
    <span *ngIf="opened" class="material-icons">\r
      {{ grupoTransaccionesOpen ? 'expand_less' : 'expand_more' }}\r
    </span>\r
  </button>\r
\r
  <!-- Submen\xFA -->\r
  <div\r
    *ngIf="grupoTransaccionesOpen"\r
    [ngClass]="opened ? 'pl-10 mt-1' : 'absolute left-full top-0 mt-0 w-44 bg-white shadow-lg rounded z-50 p-2'"\r
  >\r
    <a\r
      routerLink="/dashboard/cajas"\r
      routerLinkActive="bg-blue-100 text-blue-700"\r
      class="flex items-center px-3 py-2 mb-1 rounded-md hover:bg-blue-50 text-gray-700"\r
    >\r
      <span class="material-icons mr-2 text-yellow-600">point_of_sale</span>\r
      <span *ngIf="opened">Caja</span>\r
      <span *ngIf="!opened">Caja</span>\r
    </a>\r
\r
    <a\r
      routerLink="/dashboard/cotizaciones"\r
      routerLinkActive="bg-blue-100 text-blue-700"\r
      class="flex items-center px-3 py-2 mb-1 rounded-md hover:bg-blue-50 text-gray-700"\r
    >\r
      <span class="material-icons mr-2 text-green-600">request_quote</span>\r
      <span *ngIf="opened">Cotizaciones</span>\r
      <span *ngIf="!opened">Cotizaciones</span>\r
    </a>\r
\r
    <a\r
      routerLink="/dashboard/facturas"\r
      routerLinkActive="bg-blue-100 text-blue-700"\r
      class="flex items-center px-3 py-2 mb-1 rounded-md hover:bg-blue-50 text-gray-700"\r
    >\r
      <span class="material-icons mr-2 text-purple-600">receipt_long</span>\r
      <span *ngIf="opened">Facturas</span>\r
      <span *ngIf="!opened">Facturas</span>\r
    </a>\r
  </div>\r
</div>\r
\r
<!-- Reportes -->\r
<div class="mt-2 relative">\r
  <button\r
    (click)="grupoReportesOpen = !grupoReportesOpen"\r
    class="w-full flex items-center gap-3 px-3 py-2 rounded-md hover:bg-pink-50 transition-colors text-gray-700"\r
    [attr.aria-expanded]="grupoReportesOpen"\r
  >\r
    <span class="material-icons text-red-600">trending_up</span>\r
    <span *ngIf="opened" class="flex-1 text-left">Reportes</span>\r
    <span *ngIf="opened" class="material-icons">\r
      {{ grupoReportesOpen ? 'expand_less' : 'expand_more' }}\r
    </span>\r
  </button>\r
\r
  <!-- Submen\xFA -->\r
  <div\r
    *ngIf="grupoReportesOpen"\r
    [ngClass]="opened ? 'pl-10 mt-1' : 'absolute left-full top-0 mt-0 w-44 bg-white shadow-lg rounded z-50 p-2'"\r
  >\r
    <a\r
      routerLink="/dashboard/reportes/mensuales"\r
      routerLinkActive="bg-blue-100 text-blue-700"\r
      class="flex items-center px-3 py-2 mb-1 rounded-md hover:bg-blue-50 text-gray-700"\r
    >\r
      <span class="material-icons mr-2 text-yellow-600">payments</span>\r
      <span *ngIf="opened">Mensuales</span>\r
      <span *ngIf="!opened">Mensuales</span>\r
    </a>\r
\r
    <a\r
      routerLink="/dashboard/reportes/ventas"\r
      routerLinkActive="bg-blue-100 text-blue-700"\r
      class="flex items-center px-3 py-2 mb-1 rounded-md hover:bg-blue-50 text-gray-700"\r
    >\r
      <span class="material-icons mr-2 text-green-600">person_search</span>\r
      <span *ngIf="opened">Por asesor</span>\r
      <span *ngIf="!opened">Por asesor</span>\r
    </a>\r
\r
    <a\r
      routerLink="/dashboard/anuales"\r
      routerLinkActive="bg-blue-100 text-blue-700"\r
      class="flex items-center px-3 py-2 mb-1 rounded-md hover:bg-blue-50 text-gray-700"\r
    >\r
      <span class="material-icons mr-2 text-purple-600">bar_chart</span>\r
      <span *ngIf="opened">Anuales</span>\r
      <span *ngIf="!opened">Anuales</span>\r
    </a>\r
  </div>\r
</div>\r
\r
    </nav>\r
\r
    <!-- Footer (toggle) -->\r
    <div class="border-t border-gray-100 p-2">\r
      <button\r
        class="w-full flex items-center justify-center gap-2 px-2 py-2 rounded-md hover:bg-gray-100"\r
        (click)="opened = !opened"\r
        [attr.aria-pressed]="opened"\r
      >\r
        <span class="material-icons">{{ opened ? 'chevron_left' : 'chevron_right' }}</span>\r
        <span *ngIf="opened" class="text-sm">Colapsar</span>\r
      </button>\r
    </div>\r
  </aside>\r
\r
  <!-- MAIN CONTENT -->\r
  <div class="flex-1 flex flex-col">\r
    <!-- Topbar -->\r
    <header class="h-16 bg-pink-500 text-white flex items-center justify-between px-4 shadow-sm">\r
      <div class="flex items-center gap-3">\r
        <!-- show menu button on small screens -->\r
        <button (click)="toggleSidebar()" class="p-2 rounded-md md:hidden bg-blue-700/20 hover:bg-blue-700/30">\r
          <span class="material-icons">menu</span>\r
        </button>\r
\r
        <div class="hidden md:flex items-center gap-3">\r
          <span class="material-icons">dashboard</span>\r
          <span class="font-semibold">LA MAGA DISTRIBUCIONES</span>\r
        </div>\r
      </div>\r
\r
      <div class="flex items-center gap-3" *ngIf="user">\r
        <div class="text-sm">{{ user.email }}</div>\r
        <div class="relative">\r
          <button (click)="profileOpen = !profileOpen" class="p-1 rounded-full bg-blue-700/20 hover:bg-blue-700/30">\r
            <span class="material-icons">account_circle</span>\r
          </button>\r
          <div *ngIf="profileOpen" class="absolute right-0 mt-2 w-40 bg-white text-gray-800 rounded shadow-lg z-40">\r
            <button (click)="logout()" class="w-full text-left px-3 py-2 hover:bg-gray-100">Cerrar sesi\xF3n</button>\r
          </div>\r
        </div>\r
      </div>\r
    </header>\r
\r
    <!-- Page content -->\r
    <main class="flex-1 overflow-auto p-4">\r
      <router-outlet></router-outlet>\r
    </main>\r
  </div>\r
</div>\r
` }]
  }], () => [{ type: AuthService }, { type: i2.Router }], { checkScreenSize: [{
    type: HostListener,
    args: ["window:resize"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i03.\u0275setClassDebugInfo(DashboardComponent, { className: "DashboardComponent", filePath: "src/app/layout/dashboard.ts", lineNumber: 20 });
})();
(() => {
  const id = "src%2Fapp%2Flayout%2Fdashboard.ts%40DashboardComponent";
  function DashboardComponent_HmrLoad(t) {
    import(
      /* @vite-ignore */
      __vite__injectQuery(i03.\u0275\u0275getReplaceMetadataURL(id, t, import.meta.url), 'import')
    ).then((m) => m.default && i03.\u0275\u0275replaceMetadata(DashboardComponent, m.default, [i03, i32, i2, auth_service_exports], [CommonModule2, RouterOutlet, RouterModule, Component2, HostListener], import.meta, id));
  }
  (typeof ngDevMode === "undefined" || ngDevMode) && DashboardComponent_HmrLoad(Date.now());
  (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && DashboardComponent_HmrLoad(d.timestamp)));
})();

// src/app/guards/auth-guard.ts
import { inject } from "/@fs/Users/emiliocayambe/Documents/pos-sri-angular/frontend/.angular/cache/20.3.6/pos-sri-angular/vite/deps/@angular_core.js?v=435d668e";
import { Router as Router3 } from "/@fs/Users/emiliocayambe/Documents/pos-sri-angular/frontend/.angular/cache/20.3.6/pos-sri-angular/vite/deps/@angular_router.js?v=435d668e";
var authGuard = () => {
  const authService = inject(AuthService);
  const router = inject(Router3);
  if (authService.isAuthenticated()) {
    return true;
  } else {
    router.navigate(["/login"]);
    return false;
  }
};

// src/app/pages/not-found.component.ts
import { Component as Component3 } from "/@fs/Users/emiliocayambe/Documents/pos-sri-angular/frontend/.angular/cache/20.3.6/pos-sri-angular/vite/deps/@angular_core.js?v=435d668e";
import * as i04 from "/@fs/Users/emiliocayambe/Documents/pos-sri-angular/frontend/.angular/cache/20.3.6/pos-sri-angular/vite/deps/@angular_core.js?v=435d668e";
var NotFoundComponent = class _NotFoundComponent {
  static \u0275fac = function NotFoundComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NotFoundComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ i04.\u0275\u0275defineComponent({ type: _NotFoundComponent, selectors: [["app-not-found"]], decls: 4, vars: 0, template: function NotFoundComponent_Template(rf, ctx) {
    if (rf & 1) {
      i04.\u0275\u0275domElementStart(0, "h1");
      i04.\u0275\u0275text(1, "P\xE1gina no encontrada (404)");
      i04.\u0275\u0275domElementEnd();
      i04.\u0275\u0275domElementStart(2, "p");
      i04.\u0275\u0275text(3, "La ruta que buscas no existe.");
      i04.\u0275\u0275domElementEnd();
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i04.\u0275setClassMetadata(NotFoundComponent, [{
    type: Component3,
    args: [{
      standalone: true,
      selector: "app-not-found",
      template: `
    <h1>P\xE1gina no encontrada (404)</h1>
    <p>La ruta que buscas no existe.</p>
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i04.\u0275setClassDebugInfo(NotFoundComponent, { className: "NotFoundComponent", filePath: "src/app/pages/not-found.component.ts", lineNumber: 11 });
})();
(() => {
  const id = "src%2Fapp%2Fpages%2Fnot-found.component.ts%40NotFoundComponent";
  function NotFoundComponent_HmrLoad(t) {
    import(
      /* @vite-ignore */
      __vite__injectQuery(i04.\u0275\u0275getReplaceMetadataURL(id, t, import.meta.url), 'import')
    ).then((m) => m.default && i04.\u0275\u0275replaceMetadata(NotFoundComponent, m.default, [i04], [Component3], import.meta, id));
  }
  (typeof ngDevMode === "undefined" || ngDevMode) && NotFoundComponent_HmrLoad(Date.now());
  (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && NotFoundComponent_HmrLoad(d.timestamp)));
})();

// src/app/notacredito/notacredito.ts
import { Component as Component4 } from "/@fs/Users/emiliocayambe/Documents/pos-sri-angular/frontend/.angular/cache/20.3.6/pos-sri-angular/vite/deps/@angular_core.js?v=435d668e";
import { CommonModule as CommonModule3 } from "/@fs/Users/emiliocayambe/Documents/pos-sri-angular/frontend/.angular/cache/20.3.6/pos-sri-angular/vite/deps/@angular_common.js?v=435d668e";
import { FormsModule } from "/@fs/Users/emiliocayambe/Documents/pos-sri-angular/frontend/.angular/cache/20.3.6/pos-sri-angular/vite/deps/@angular_forms.js?v=435d668e";
import * as i06 from "/@fs/Users/emiliocayambe/Documents/pos-sri-angular/frontend/.angular/cache/20.3.6/pos-sri-angular/vite/deps/@angular_core.js?v=435d668e";

// src/app/notacredito/notacredito.services.ts
var notacredito_services_exports = {};
__export(notacredito_services_exports, {
  NotaCreditoService: () => NotaCreditoService
});
import { Injectable as Injectable2 } from "/@fs/Users/emiliocayambe/Documents/pos-sri-angular/frontend/.angular/cache/20.3.6/pos-sri-angular/vite/deps/@angular_core.js?v=435d668e";
import * as i05 from "/@fs/Users/emiliocayambe/Documents/pos-sri-angular/frontend/.angular/cache/20.3.6/pos-sri-angular/vite/deps/@angular_core.js?v=435d668e";
import * as i12 from "/@fs/Users/emiliocayambe/Documents/pos-sri-angular/frontend/.angular/cache/20.3.6/pos-sri-angular/vite/deps/@angular_common_http.js?v=435d668e";
var NotaCreditoService = class _NotaCreditoService {
  http;
  APIurl = `${environment.apiUrle}/`;
  constructor(http) {
    this.http = http;
  }
  getNotasCredito() {
    return this.http.get(this.APIurl);
  }
  createNotaCredito(data) {
    return this.http.post(`${this.APIurl}nota-credito/general`, data);
  }
  obtenerFacturas() {
    return this.http.get(`${this.APIurl}facturas/`);
  }
  reportePdf(id) {
    return this.http.get(`${this.APIurl}${id}/reporte`, {
      responseType: "blob"
    });
  }
  buscarPorClave(clave) {
    return this.http.get(`${this.APIurl}nota-credito/factura/${clave}`);
  }
  static \u0275fac = function NotaCreditoService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NotaCreditoService)(i05.\u0275\u0275inject(i12.HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ i05.\u0275\u0275defineInjectable({ token: _NotaCreditoService, factory: _NotaCreditoService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i05.\u0275setClassMetadata(NotaCreditoService, [{
    type: Injectable2,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: i12.HttpClient }], null);
})();

// src/app/notacredito/notacredito.ts
import * as i22 from "/@fs/Users/emiliocayambe/Documents/pos-sri-angular/frontend/.angular/cache/20.3.6/pos-sri-angular/vite/deps/@angular_common.js?v=435d668e";
import * as i33 from "/@fs/Users/emiliocayambe/Documents/pos-sri-angular/frontend/.angular/cache/20.3.6/pos-sri-angular/vite/deps/@angular_forms.js?v=435d668e";
function NotaCreditoComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    i06.\u0275\u0275elementStart(0, "div", 18)(1, "p")(2, "strong");
    i06.\u0275\u0275text(3, "Factura:");
    i06.\u0275\u0275elementEnd();
    i06.\u0275\u0275text(4);
    i06.\u0275\u0275elementEnd();
    i06.\u0275\u0275elementStart(5, "p")(6, "strong");
    i06.\u0275\u0275text(7, "Cliente:");
    i06.\u0275\u0275elementEnd();
    i06.\u0275\u0275text(8);
    i06.\u0275\u0275elementEnd();
    i06.\u0275\u0275elementStart(9, "p")(10, "strong");
    i06.\u0275\u0275text(11, "Total:");
    i06.\u0275\u0275elementEnd();
    i06.\u0275\u0275text(12);
    i06.\u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = i06.\u0275\u0275nextContext();
    i06.\u0275\u0275advance(4);
    i06.\u0275\u0275textInterpolate1(" ", ctx_r0.facturaSeleccionada.secuencial);
    i06.\u0275\u0275advance(4);
    i06.\u0275\u0275textInterpolate1(" ", ctx_r0.facturaSeleccionada.cliente == null ? null : ctx_r0.facturaSeleccionada.cliente.nombre);
    i06.\u0275\u0275advance(4);
    i06.\u0275\u0275textInterpolate1(" $", ctx_r0.facturaSeleccionada.totalFactura);
  }
}
function NotaCreditoComponent_div_30_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = i06.\u0275\u0275getCurrentView();
    i06.\u0275\u0275elementStart(0, "div", 27);
    i06.\u0275\u0275listener("click", function NotaCreditoComponent_div_30_div_6_Template_div_click_0_listener() {
      const f_r4 = i06.\u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = i06.\u0275\u0275nextContext(2);
      return i06.\u0275\u0275resetView(ctx_r0.seleccionarFactura(f_r4));
    });
    i06.\u0275\u0275elementStart(1, "p", 28);
    i06.\u0275\u0275text(2);
    i06.\u0275\u0275elementEnd();
    i06.\u0275\u0275elementStart(3, "p", 29);
    i06.\u0275\u0275text(4);
    i06.\u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const f_r4 = ctx.$implicit;
    i06.\u0275\u0275advance(2);
    i06.\u0275\u0275textInterpolate(f_r4.secuencial);
    i06.\u0275\u0275advance(2);
    i06.\u0275\u0275textInterpolate1("$", f_r4.totalFactura);
  }
}
function NotaCreditoComponent_div_30_p_7_Template(rf, ctx) {
  if (rf & 1) {
    i06.\u0275\u0275elementStart(0, "p", 30);
    i06.\u0275\u0275text(1, " No hay resultados ");
    i06.\u0275\u0275elementEnd();
  }
}
function NotaCreditoComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = i06.\u0275\u0275getCurrentView();
    i06.\u0275\u0275elementStart(0, "div", 19)(1, "div", 20)(2, "h2", 21);
    i06.\u0275\u0275text(3, "Seleccionar Factura");
    i06.\u0275\u0275elementEnd();
    i06.\u0275\u0275elementStart(4, "input", 22);
    i06.\u0275\u0275twoWayListener("ngModelChange", function NotaCreditoComponent_div_30_Template_input_ngModelChange_4_listener($event) {
      i06.\u0275\u0275restoreView(_r2);
      const ctx_r0 = i06.\u0275\u0275nextContext();
      i06.\u0275\u0275twoWayBindingSet(ctx_r0.buscador, $event) || (ctx_r0.buscador = $event);
      return i06.\u0275\u0275resetView($event);
    });
    i06.\u0275\u0275elementEnd();
    i06.\u0275\u0275elementStart(5, "div", 23);
    i06.\u0275\u0275template(6, NotaCreditoComponent_div_30_div_6_Template, 5, 2, "div", 24)(7, NotaCreditoComponent_div_30_p_7_Template, 2, 0, "p", 25);
    i06.\u0275\u0275elementEnd();
    i06.\u0275\u0275elementStart(8, "button", 26);
    i06.\u0275\u0275listener("click", function NotaCreditoComponent_div_30_Template_button_click_8_listener() {
      i06.\u0275\u0275restoreView(_r2);
      const ctx_r0 = i06.\u0275\u0275nextContext();
      return i06.\u0275\u0275resetView(ctx_r0.cerrarModal());
    });
    i06.\u0275\u0275text(9, " Cerrar ");
    i06.\u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = i06.\u0275\u0275nextContext();
    i06.\u0275\u0275advance(4);
    i06.\u0275\u0275twoWayProperty("ngModel", ctx_r0.buscador);
    i06.\u0275\u0275advance(2);
    i06.\u0275\u0275property("ngForOf", ctx_r0.facturasFiltradas());
    i06.\u0275\u0275advance();
    i06.\u0275\u0275property("ngIf", ctx_r0.facturasFiltradas().length === 0);
  }
}
var NotaCreditoComponent = class _NotaCreditoComponent {
  notaCreditoService;
  facturas = [];
  facturaSeleccionada = null;
  detalles = [];
  tipo = "";
  modalOpen = false;
  buscador = "";
  razon = "";
  claveAcceso = "";
  constructor(notaCreditoService) {
    this.notaCreditoService = notaCreditoService;
  }
  ngOnInit() {
    this.cargarFacturas();
  }
  cargarFacturas() {
    this.notaCreditoService.obtenerFacturas().subscribe({
      next: (data) => {
        this.facturas = data;
      },
      error: (err) => console.error("Error cargando facturas:", err)
    });
  }
  abrirModal() {
    this.modalOpen = true;
  }
  cerrarModal() {
    this.modalOpen = false;
  }
  facturasFiltradas() {
    return this.facturas.filter((f) => f.secuencial.toString().includes(this.buscador));
  }
  seleccionarFactura(factura) {
    this.facturaSeleccionada = factura;
    this.detalles = factura.detalles ?? [];
    this.modalOpen = false;
  }
  buscarFacturaPorClave() {
    if (!this.claveAcceso.trim()) {
      alert("Ingrese una clave de acceso");
      return;
    }
    this.notaCreditoService.buscarPorClave(this.claveAcceso).subscribe({
      next: (factura) => {
        if (!factura) {
          alert("No existe factura con esa clave de acceso");
          return;
        }
        this.facturaSeleccionada = factura;
        this.detalles = factura.detalles ?? [];
        this.modalOpen = false;
      },
      error: (err) => {
        console.error(err);
        alert("Error buscando por clave de acceso");
      }
    });
  }
  guardarNotaCredito() {
    if (!this.facturaSeleccionada) {
      alert("Debe seleccionar una factura.");
      return;
    }
    if (!this.tipo) {
      alert("Debe seleccionar el tipo de nota de cr\xE9dito.");
      return;
    }
    if (!this.razon.trim()) {
      alert("Debe escribir un motivo.");
      return;
    }
    const payload = {
      facturaId: this.facturaSeleccionada.id,
      tipo: this.tipo,
      motivo: this.razon,
      detalles: this.tipo === "DEVOLUCION_PRODUCTOS" ? this.detalles : []
    };
    this.notaCreditoService.createNotaCredito(payload).subscribe({
      next: (res) => {
        alert("Nota de cr\xE9dito creada correctamente.");
        console.log(res);
        this.facturaSeleccionada = null;
        this.tipo = "";
        this.razon = "";
        this.detalles = [];
        this.claveAcceso = "";
      },
      error: (err) => {
        console.error(err);
        alert(err.error?.message || "Error al crear nota de cr\xE9dito");
      }
    });
  }
  static \u0275fac = function NotaCreditoComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NotaCreditoComponent)(i06.\u0275\u0275directiveInject(NotaCreditoService));
  };
  static \u0275cmp = /* @__PURE__ */ i06.\u0275\u0275defineComponent({ type: _NotaCreditoComponent, selectors: [["app-nota-credito"]], decls: 31, vars: 5, consts: [[1, "p-8", "max-w-3xl", "mx-auto"], [1, "text-3xl", "font-bold", "mb-6"], [1, "px-4", "py-2", "bg-green-600", "text-white", "rounded", "hover:bg-green-700", 3, "click"], ["class", "mt-6 border p-4 rounded bg-gray-50", 4, "ngIf"], [1, "mt-6"], [1, "block", "font-bold", "mb-2"], [1, "border", "p-2", "rounded", "w-full", 3, "ngModelChange", "ngModel"], ["value", ""], ["value", "ANULACION_TOTAL"], ["value", "FACTURA_DUPLICADA"], ["value", "CORRECCION_FORMA_PAGO"], ["value", "DEVOLUCION_PRODUCTOS"], ["rows", "3", "placeholder", "Escriba la raz\xF3n de la nota de cr\xE9dito", 1, "w-full", "border", "p-3", "rounded", 3, "ngModelChange", "ngModel"], [1, "flex", "gap-2", "mb-4"], ["type", "text", "placeholder", "Buscar por clave de acceso", 1, "border", "p-2", "rounded", "w-80", 3, "ngModelChange", "ngModel"], [1, "bg-blue-600", "text-white", "px-4", "py-2", "rounded", 3, "click"], [1, "mt-6", "px-6", "py-2", "bg-blue-600", "text-white", "rounded", "hover:bg-blue-700", 3, "click"], ["class", "fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center", 4, "ngIf"], [1, "mt-6", "border", "p-4", "rounded", "bg-gray-50"], [1, "fixed", "inset-0", "bg-black", "bg-opacity-40", "flex", "items-center", "justify-center"], [1, "bg-white", "w-96", "rounded", "shadow", "p-6"], [1, "text-xl", "font-bold", "mb-4"], ["type", "text", "placeholder", "Buscar factura...", 1, "border", "p-2", "w-full", "rounded", "mb-4", 3, "ngModelChange", "ngModel"], [1, "max-h-72", "overflow-y-auto", "border", "rounded"], ["class", "p-3 cursor-pointer hover:bg-gray-100 border-b", 3, "click", 4, "ngFor", "ngForOf"], ["class", "text-center text-gray-500 p-3", 4, "ngIf"], [1, "mt-4", "px-4", "py-2", "bg-red-600", "text-white", "rounded", 3, "click"], [1, "p-3", "cursor-pointer", "hover:bg-gray-100", "border-b", 3, "click"], [1, "font-semibold"], [1, "text-sm", "text-gray-600"], [1, "text-center", "text-gray-500", "p-3"]], template: function NotaCreditoComponent_Template(rf, ctx) {
    if (rf & 1) {
      i06.\u0275\u0275elementStart(0, "div", 0)(1, "h1", 1);
      i06.\u0275\u0275text(2, "Nueva Nota de Cr\xE9dito");
      i06.\u0275\u0275elementEnd();
      i06.\u0275\u0275elementStart(3, "button", 2);
      i06.\u0275\u0275listener("click", function NotaCreditoComponent_Template_button_click_3_listener() {
        return ctx.abrirModal();
      });
      i06.\u0275\u0275text(4, " Seleccionar Factura ");
      i06.\u0275\u0275elementEnd();
      i06.\u0275\u0275template(5, NotaCreditoComponent_div_5_Template, 13, 3, "div", 3);
      i06.\u0275\u0275elementStart(6, "div", 4)(7, "label", 5);
      i06.\u0275\u0275text(8, "Tipo de Nota de Cr\xE9dito");
      i06.\u0275\u0275elementEnd();
      i06.\u0275\u0275elementStart(9, "select", 6);
      i06.\u0275\u0275twoWayListener("ngModelChange", function NotaCreditoComponent_Template_select_ngModelChange_9_listener($event) {
        i06.\u0275\u0275twoWayBindingSet(ctx.tipo, $event) || (ctx.tipo = $event);
        return $event;
      });
      i06.\u0275\u0275elementStart(10, "option", 7);
      i06.\u0275\u0275text(11, "-- Seleccione --");
      i06.\u0275\u0275elementEnd();
      i06.\u0275\u0275elementStart(12, "option", 8);
      i06.\u0275\u0275text(13, "Anulaci\xF3n Total");
      i06.\u0275\u0275elementEnd();
      i06.\u0275\u0275elementStart(14, "option", 9);
      i06.\u0275\u0275text(15, "Factura Duplicada");
      i06.\u0275\u0275elementEnd();
      i06.\u0275\u0275elementStart(16, "option", 10);
      i06.\u0275\u0275text(17, "Correcci\xF3n de Forma de Pago");
      i06.\u0275\u0275elementEnd();
      i06.\u0275\u0275elementStart(18, "option", 11);
      i06.\u0275\u0275text(19, "Devoluci\xF3n de Productos");
      i06.\u0275\u0275elementEnd()()();
      i06.\u0275\u0275elementStart(20, "div", 4)(21, "label", 5);
      i06.\u0275\u0275text(22, "Motivo / Raz\xF3n");
      i06.\u0275\u0275elementEnd();
      i06.\u0275\u0275elementStart(23, "textarea", 12);
      i06.\u0275\u0275twoWayListener("ngModelChange", function NotaCreditoComponent_Template_textarea_ngModelChange_23_listener($event) {
        i06.\u0275\u0275twoWayBindingSet(ctx.razon, $event) || (ctx.razon = $event);
        return $event;
      });
      i06.\u0275\u0275elementEnd()();
      i06.\u0275\u0275elementStart(24, "div", 13)(25, "input", 14);
      i06.\u0275\u0275twoWayListener("ngModelChange", function NotaCreditoComponent_Template_input_ngModelChange_25_listener($event) {
        i06.\u0275\u0275twoWayBindingSet(ctx.claveAcceso, $event) || (ctx.claveAcceso = $event);
        return $event;
      });
      i06.\u0275\u0275elementEnd();
      i06.\u0275\u0275elementStart(26, "button", 15);
      i06.\u0275\u0275listener("click", function NotaCreditoComponent_Template_button_click_26_listener() {
        return ctx.buscarFacturaPorClave();
      });
      i06.\u0275\u0275text(27, " Buscar ");
      i06.\u0275\u0275elementEnd()();
      i06.\u0275\u0275elementStart(28, "button", 16);
      i06.\u0275\u0275listener("click", function NotaCreditoComponent_Template_button_click_28_listener() {
        return ctx.guardarNotaCredito();
      });
      i06.\u0275\u0275text(29, " Guardar Nota de Cr\xE9dito ");
      i06.\u0275\u0275elementEnd()();
      i06.\u0275\u0275template(30, NotaCreditoComponent_div_30_Template, 10, 3, "div", 17);
    }
    if (rf & 2) {
      i06.\u0275\u0275advance(5);
      i06.\u0275\u0275property("ngIf", ctx.facturaSeleccionada);
      i06.\u0275\u0275advance(4);
      i06.\u0275\u0275twoWayProperty("ngModel", ctx.tipo);
      i06.\u0275\u0275advance(14);
      i06.\u0275\u0275twoWayProperty("ngModel", ctx.razon);
      i06.\u0275\u0275advance(2);
      i06.\u0275\u0275twoWayProperty("ngModel", ctx.claveAcceso);
      i06.\u0275\u0275advance(5);
      i06.\u0275\u0275property("ngIf", ctx.modalOpen);
    }
  }, dependencies: [CommonModule3, i22.NgClass, i22.NgComponentOutlet, i22.NgForOf, i22.NgIf, i22.NgTemplateOutlet, i22.NgStyle, i22.NgSwitch, i22.NgSwitchCase, i22.NgSwitchDefault, i22.NgPlural, i22.NgPluralCase, FormsModule, i33.\u0275NgNoValidate, i33.NgSelectOption, i33.\u0275NgSelectMultipleOption, i33.DefaultValueAccessor, i33.NumberValueAccessor, i33.RangeValueAccessor, i33.CheckboxControlValueAccessor, i33.SelectControlValueAccessor, i33.SelectMultipleControlValueAccessor, i33.RadioControlValueAccessor, i33.NgControlStatus, i33.NgControlStatusGroup, i33.RequiredValidator, i33.MinLengthValidator, i33.MaxLengthValidator, i33.PatternValidator, i33.CheckboxRequiredValidator, i33.EmailValidator, i33.MinValidator, i33.MaxValidator, i33.NgModel, i33.NgModelGroup, i33.NgForm, i22.AsyncPipe, i22.UpperCasePipe, i22.LowerCasePipe, i22.JsonPipe, i22.SlicePipe, i22.DecimalPipe, i22.PercentPipe, i22.TitleCasePipe, i22.CurrencyPipe, i22.DatePipe, i22.I18nPluralPipe, i22.I18nSelectPipe, i22.KeyValuePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i06.\u0275setClassMetadata(NotaCreditoComponent, [{
    type: Component4,
    args: [{ selector: "app-nota-credito", imports: [CommonModule3, FormsModule], template: '<div class="p-8 max-w-3xl mx-auto">\n\n  <h1 class="text-3xl font-bold mb-6">Nueva Nota de Cr\xE9dito</h1>\n\n  <!-- Bot\xF3n abrir modal -->\n  <button\n    (click)="abrirModal()"\n    class="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"\n  >\n    Seleccionar Factura\n  </button>\n\n  <!-- Factura seleccionada -->\n  <div *ngIf="facturaSeleccionada" class="mt-6 border p-4 rounded bg-gray-50">\n    <p><strong>Factura:</strong> {{ facturaSeleccionada.secuencial }}</p>\n    <p><strong>Cliente:</strong> {{ facturaSeleccionada.cliente?.nombre }}</p>\n    <p><strong>Total:</strong> ${{ facturaSeleccionada.totalFactura }}</p>\n  </div>\n\n<!-- Tipo de Nota de Cr\xE9dito -->\n<div class="mt-6">\n  <label class="block font-bold mb-2">Tipo de Nota de Cr\xE9dito</label>\n\n  <select [(ngModel)]="tipo" class="border p-2 rounded w-full">\n    <option value="">-- Seleccione --</option>\n    <option value="ANULACION_TOTAL">Anulaci\xF3n Total</option>\n    <option value="FACTURA_DUPLICADA">Factura Duplicada</option>\n    <option value="CORRECCION_FORMA_PAGO">Correcci\xF3n de Forma de Pago</option>\n    <option value="DEVOLUCION_PRODUCTOS">Devoluci\xF3n de Productos</option>\n  </select>\n</div>\n\n\n\n  <!-- TextArea Raz\xF3n -->\n  <div class="mt-6">\n    <label class="block font-bold mb-2">Motivo / Raz\xF3n</label>\n    <textarea\n      [(ngModel)]="razon"\n      rows="3"\n      placeholder="Escriba la raz\xF3n de la nota de cr\xE9dito"\n      class="w-full border p-3 rounded"\n    ></textarea>\n  </div>\n  <div class="flex gap-2 mb-4">\n  <input type="text"\n         [(ngModel)]="claveAcceso"\n         placeholder="Buscar por clave de acceso"\n         class="border p-2 rounded w-80">\n\n  <button (click)="buscarFacturaPorClave()"\n          class="bg-blue-600 text-white px-4 py-2 rounded">\n    Buscar\n  </button>\n</div>\n\n\n  <!-- Bot\xF3n guardar -->\n  <button\n    (click)="guardarNotaCredito()"\n    class="mt-6 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"\n  >\n    Guardar Nota de Cr\xE9dito\n  </button>\n</div>\n\n<!-- MODAL -->\n<div\n  *ngIf="modalOpen"\n  class="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center"\n>\n  <div class="bg-white w-96 rounded shadow p-6">\n\n    <h2 class="text-xl font-bold mb-4">Seleccionar Factura</h2>\n\n    <input\n      [(ngModel)]="buscador"\n      type="text"\n      placeholder="Buscar factura..."\n      class="border p-2 w-full rounded mb-4"\n    />\n\n    <div class="max-h-72 overflow-y-auto border rounded">\n\n      <div\n        *ngFor="let f of facturasFiltradas()"\n        (click)="seleccionarFactura(f)"\n        class="p-3 cursor-pointer hover:bg-gray-100 border-b"\n      >\n        <p class="font-semibold">{{ f.secuencial }}</p>\n        <p class="text-sm text-gray-600">${{ f.totalFactura }}</p>\n      </div>\n\n      <p\n        *ngIf="facturasFiltradas().length === 0"\n        class="text-center text-gray-500 p-3"\n      >\n        No hay resultados\n      </p>\n\n    </div>\n\n    <button\n      class="mt-4 px-4 py-2 bg-red-600 text-white rounded"\n      (click)="cerrarModal()"\n    >\n      Cerrar\n    </button>\n\n  </div>\n</div>\n' }]
  }], () => [{ type: NotaCreditoService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i06.\u0275setClassDebugInfo(NotaCreditoComponent, { className: "NotaCreditoComponent", filePath: "src/app/notacredito/notacredito.ts", lineNumber: 14 });
})();
(() => {
  const id = "src%2Fapp%2Fnotacredito%2Fnotacredito.ts%40NotaCreditoComponent";
  function NotaCreditoComponent_HmrLoad(t) {
    import(
      /* @vite-ignore */
      __vite__injectQuery(i06.\u0275\u0275getReplaceMetadataURL(id, t, import.meta.url), 'import')
    ).then((m) => m.default && i06.\u0275\u0275replaceMetadata(NotaCreditoComponent, m.default, [i06, i22, i33, notacredito_services_exports], [CommonModule3, FormsModule, Component4], import.meta, id));
  }
  (typeof ngDevMode === "undefined" || ngDevMode) && NotaCreditoComponent_HmrLoad(Date.now());
  (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && NotaCreditoComponent_HmrLoad(d.timestamp)));
})();

// src/app/app.routes.ts
var routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  {
    path: "dashboard",
    component: DashboardComponent,
    canActivate: [authGuard],
    // Función guard
    children: [
      {
        path: "admin",
        loadComponent: () => import("/chunk-DGPLJM7C.js").then((m) => m.AdminComponent)
      },
      {
        path: "ventas",
        loadComponent: () => import("/chunk-YSA7XYFW.js").then((m) => m.VentasComponent)
      },
      {
        path: "caja",
        loadComponent: () => import("/chunk-NNLPMLJN.js").then((m) => m.CajaComponent)
      },
      {
        path: "empresa",
        // ✅ Mover aquí
        component: ListarEmpresaComponent
      },
      {
        path: "lista-empresa",
        loadComponent: () => import("/chunk-SNXKMYA5.js").then((m) => m.ListarEmpresaComponent)
      },
      // Rutas para Clientes
      {
        path: "clientes",
        loadComponent: () => import("/chunk-AY2BSE3Q.js").then((m) => m.ListaClientesComponent)
      },
      {
        path: "clientes/crear",
        loadComponent: () => import("/chunk-CPEOFKA6.js").then((m) => m.ClienteFormComponent)
      },
      {
        path: "clientes/editar/:id",
        loadComponent: () => import("/chunk-CPEOFKA6.js").then((m) => m.ClienteFormComponent)
      },
      // Rutas para productos
      {
        path: "productos",
        loadComponent: () => import("/chunk-BQAE7M5T.js").then((m) => m.ProductoListComponent)
      },
      {
        path: "productos/crear",
        loadComponent: () => import("/chunk-2GRBMYVT.js").then((m) => m.CrearProductoComponent)
      },
      {
        path: "productos/editar/:id",
        loadComponent: () => import("/chunk-PQV6NAQ6.js").then((m) => m.EditarProductoComponent)
      },
      // rutas para facturas
      {
        path: "facturas",
        loadComponent: () => import("/chunk-Q4J6LQMI.js").then((m) => m.ListarFacturasComponent)
      },
      {
        path: "facturas/crear",
        loadComponent: () => import("/chunk-KOF72NSV.js").then((m) => m.FacturaComponent)
      },
      // rutas para cotizaciones
      {
        path: "cotizaciones",
        loadComponent: () => import("/chunk-U374LO6N.js").then((m) => m.ListarCotizacionesComponent)
      },
      {
        path: "cotizaciones/crear",
        loadComponent: () => import("/chunk-WE6KBPV2.js").then((m) => m.CotizacionComponent)
      },
      // rutas para usuarios
      {
        path: "usuarios",
        loadComponent: () => import("/chunk-FWSWEN4T.js").then((m) => m.UsuariosComponent)
      },
      // rutas para cajas
      {
        path: "cajas",
        loadComponent: () => import("/chunk-XUE66MLB.js").then((m) => m.CajaComponent)
      },
      // rutas para reportes 
      {
        path: "reportes/ventas",
        loadComponent: () => import("/chunk-BBZL4TWA.js").then((m) => m.ReporteUsuariosComponent)
      },
      {
        path: "reportes/mensuales",
        loadComponent: () => import("/chunk-UG3TPU4W.js").then((m) => m.ReporteVentasGraficoComponent)
      },
      {
        path: "nota-credito",
        component: NotaCreditoComponent
      }
    ]
  },
  { path: "**", component: NotFoundComponent }
  // Ruta catch-all para 404
];

// src/app/app.config.ts
var appConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    // Esto reemplaza HttpClientModule
    provideNativeDateAdapter(),
    // ✅ importante
    { provide: LOCALE_ID, useValue: "es" },
    provideHttpClient(withInterceptorsFromDi()),
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ]
};

// src/app/app.ts
import { Component as Component5, signal } from "/@fs/Users/emiliocayambe/Documents/pos-sri-angular/frontend/.angular/cache/20.3.6/pos-sri-angular/vite/deps/@angular_core.js?v=435d668e";
import { RouterOutlet as RouterOutlet2 } from "/@fs/Users/emiliocayambe/Documents/pos-sri-angular/frontend/.angular/cache/20.3.6/pos-sri-angular/vite/deps/@angular_router.js?v=435d668e";
import * as i08 from "/@fs/Users/emiliocayambe/Documents/pos-sri-angular/frontend/.angular/cache/20.3.6/pos-sri-angular/vite/deps/@angular_core.js?v=435d668e";

// src/app/idle.services.ts
var idle_services_exports = {};
__export(idle_services_exports, {
  IdleService: () => IdleService
});
import { Injectable as Injectable3 } from "/@fs/Users/emiliocayambe/Documents/pos-sri-angular/frontend/.angular/cache/20.3.6/pos-sri-angular/vite/deps/@angular_core.js?v=435d668e";
import * as i07 from "/@fs/Users/emiliocayambe/Documents/pos-sri-angular/frontend/.angular/cache/20.3.6/pos-sri-angular/vite/deps/@angular_core.js?v=435d668e";
import * as i13 from "/@fs/Users/emiliocayambe/Documents/pos-sri-angular/frontend/.angular/cache/20.3.6/pos-sri-angular/vite/deps/@angular_router.js?v=435d668e";
var IdleService = class _IdleService {
  router;
  ngZone;
  authservice;
  timeout;
  timeoutMs = 10 * 60 * 1e3;
  // 10 minutos
  constructor(router, ngZone, authservice) {
    this.router = router;
    this.ngZone = ngZone;
    this.authservice = authservice;
    this.initListeners();
    this.resetTimer();
  }
  initListeners() {
    ["click", "mousemove", "keydown", "scroll"].forEach((event) => {
      window.addEventListener(event, () => this.resetTimer());
    });
  }
  resetTimer() {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      this.authservice.logout();
    }, this.timeoutMs);
  }
  static \u0275fac = function IdleService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _IdleService)(i07.\u0275\u0275inject(i13.Router), i07.\u0275\u0275inject(i07.NgZone), i07.\u0275\u0275inject(AuthService));
  };
  static \u0275prov = /* @__PURE__ */ i07.\u0275\u0275defineInjectable({ token: _IdleService, factory: _IdleService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i07.\u0275setClassMetadata(IdleService, [{
    type: Injectable3,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: i13.Router }, { type: i07.NgZone }, { type: AuthService }], null);
})();

// src/app/app.ts
var App = class _App {
  idleService;
  title = signal("pos-sri-angular", ...ngDevMode ? [{ debugName: "title" }] : []);
  constructor(idleService) {
    this.idleService = idleService;
  }
  static \u0275fac = function App_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _App)(i08.\u0275\u0275directiveInject(IdleService));
  };
  static \u0275cmp = /* @__PURE__ */ i08.\u0275\u0275defineComponent({ type: _App, selectors: [["app-root"]], decls: 1, vars: 0, template: function App_Template(rf, ctx) {
    if (rf & 1) {
      i08.\u0275\u0275element(0, "router-outlet");
    }
  }, dependencies: [RouterOutlet2], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i08.\u0275setClassMetadata(App, [{
    type: Component5,
    args: [{ selector: "app-root", imports: [RouterOutlet2], template: "<router-outlet></router-outlet>\r\n" }]
  }], () => [{ type: IdleService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i08.\u0275setClassDebugInfo(App, { className: "App", filePath: "src/app/app.ts", lineNumber: 11 });
})();
(() => {
  const id = "src%2Fapp%2Fapp.ts%40App";
  function App_HmrLoad(t) {
    import(
      /* @vite-ignore */
      __vite__injectQuery(i08.\u0275\u0275getReplaceMetadataURL(id, t, import.meta.url), 'import')
    ).then((m) => m.default && i08.\u0275\u0275replaceMetadata(App, m.default, [i08, idle_services_exports], [RouterOutlet2, Component5], import.meta, id));
  }
  (typeof ngDevMode === "undefined" || ngDevMode) && App_HmrLoad(Date.now());
  (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && App_HmrLoad(d.timestamp)));
})();

// src/main.ts
import { registerLocaleData } from "/@fs/Users/emiliocayambe/Documents/pos-sri-angular/frontend/.angular/cache/20.3.6/pos-sri-angular/vite/deps/@angular_common.js?v=435d668e";
import localeEs from "/@fs/Users/emiliocayambe/Documents/pos-sri-angular/frontend/.angular/cache/20.3.6/pos-sri-angular/vite/deps/@angular_common_locales_es.js?v=435d668e";
registerLocaleData(localeEs);
bootstrapApplication(App, appConfig).catch((err) => console.error(err));


//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tYWluLnRzIiwic3JjL2FwcC9hcHAuY29uZmlnLnRzIiwic3JjL2FwcC9hdXRoLWludGVyY2VwdG9yLnRzIiwic3JjL2FwcC9hdXRoL2xvZ2luL2xvZ2luLnRzIiwic3JjL2FwcC9hdXRoL2xvZ2luL2xvZ2luLmh0bWwiLCJzcmMvYXBwL2xheW91dC9kYXNoYm9hcmQudHMiLCJzcmMvYXBwL2xheW91dC9kYXNoYm9hcmQuaHRtbCIsInNyYy9hcHAvZ3VhcmRzL2F1dGgtZ3VhcmQudHMiLCJzcmMvYXBwL3BhZ2VzL25vdC1mb3VuZC5jb21wb25lbnQudHMiLCJzcmMvYXBwL25vdGFjcmVkaXRvL25vdGFjcmVkaXRvLnRzIiwic3JjL2FwcC9ub3RhY3JlZGl0by9ub3RhY3JlZGl0by5odG1sIiwic3JjL2FwcC9ub3RhY3JlZGl0by9ub3RhY3JlZGl0by5zZXJ2aWNlcy50cyIsInNyYy9hcHAvYXBwLnJvdXRlcy50cyIsInNyYy9hcHAvYXBwLnRzIiwic3JjL2FwcC9hcHAuaHRtbCIsInNyYy9hcHAvaWRsZS5zZXJ2aWNlcy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBib290c3RyYXBBcHBsaWNhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5pbXBvcnQgeyBhcHBDb25maWcgfSBmcm9tICcuL2FwcC9hcHAuY29uZmlnJztcclxuaW1wb3J0IHsgQXBwIH0gZnJvbSAnLi9hcHAvYXBwJztcclxuaW1wb3J0IHsgcmVnaXN0ZXJMb2NhbGVEYXRhIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IGxvY2FsZUVzIGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9sb2NhbGVzL2VzJztcclxuXHJcbnJlZ2lzdGVyTG9jYWxlRGF0YShsb2NhbGVFcyk7XHJcblxyXG5ib290c3RyYXBBcHBsaWNhdGlvbihBcHAsIGFwcENvbmZpZylcclxuICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcclxuIiwiaW1wb3J0IHsgQXBwbGljYXRpb25Db25maWcsIExPQ0FMRV9JRCwgcHJvdmlkZUJyb3dzZXJHbG9iYWxFcnJvckxpc3RlbmVycywgcHJvdmlkZVpvbmVDaGFuZ2VEZXRlY3Rpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgcHJvdmlkZVJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IHByb3ZpZGVIdHRwQ2xpZW50LCB3aXRoSW50ZXJjZXB0b3JzRnJvbURpICB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgcHJvdmlkZU5hdGl2ZURhdGVBZGFwdGVyIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XHJcbmltcG9ydCB7IEhUVFBfSU5URVJDRVBUT1JTIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBBdXRoSW50ZXJjZXB0b3IgfSBmcm9tICcuL2F1dGgtaW50ZXJjZXB0b3InO1xyXG5cclxuXHJcblxyXG5pbXBvcnQgeyByb3V0ZXMgfSBmcm9tICcuL2FwcC5yb3V0ZXMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFwcENvbmZpZzogQXBwbGljYXRpb25Db25maWcgPSB7XHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICBwcm92aWRlQnJvd3Nlckdsb2JhbEVycm9yTGlzdGVuZXJzKCksXHJcbiAgICBwcm92aWRlWm9uZUNoYW5nZURldGVjdGlvbih7IGV2ZW50Q29hbGVzY2luZzogdHJ1ZSB9KSxcclxuICAgIHByb3ZpZGVSb3V0ZXIocm91dGVzKSxcclxuICAgIHByb3ZpZGVIdHRwQ2xpZW50KCksIC8vIEVzdG8gcmVlbXBsYXphIEh0dHBDbGllbnRNb2R1bGVcclxuICAgIHByb3ZpZGVOYXRpdmVEYXRlQWRhcHRlcigpLCAvLyDinIUgaW1wb3J0YW50ZVxyXG4gICAgeyBwcm92aWRlOiBMT0NBTEVfSUQsIHVzZVZhbHVlOiAnZXMnIH0sXHJcbiAgICBwcm92aWRlSHR0cENsaWVudCh3aXRoSW50ZXJjZXB0b3JzRnJvbURpKCkpLFxyXG4gICAgeyBwcm92aWRlOiBIVFRQX0lOVEVSQ0VQVE9SUywgdXNlQ2xhc3M6IEF1dGhJbnRlcmNlcHRvciwgbXVsdGk6IHRydWUgfVxyXG5cclxuICBdXHJcbn07XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtcclxuICBIdHRwSW50ZXJjZXB0b3IsXHJcbiAgSHR0cFJlcXVlc3QsXHJcbiAgSHR0cEhhbmRsZXIsXHJcbiAgSHR0cEV2ZW50XHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBBdXRoSW50ZXJjZXB0b3IgaW1wbGVtZW50cyBIdHRwSW50ZXJjZXB0b3Ige1xyXG4gIGludGVyY2VwdChyZXE6IEh0dHBSZXF1ZXN0PGFueT4sIG5leHQ6IEh0dHBIYW5kbGVyKTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8YW55Pj4ge1xyXG4gICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTsgLy8gbyBkZXNkZSB0dSBBdXRoU2VydmljZVxyXG5cclxuICAgIGlmICh0b2tlbikge1xyXG4gICAgICBjb25zdCBjbG9uZWQgPSByZXEuY2xvbmUoe1xyXG4gICAgICAgIHNldEhlYWRlcnM6IHtcclxuICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIG5leHQuaGFuZGxlKGNsb25lZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG5leHQuaGFuZGxlKHJlcSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uL2F1dGguc2VydmljZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCBTd2FsIGZyb20gJ3N3ZWV0YWxlcnQyJztcclxuXHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlXSxcclxuICBzZWxlY3RvcjogJ2FwcC1sb2dpbicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2xvZ2luLmh0bWwnXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQge1xyXG4gIGxvZ2luRm9ybTogRm9ybUdyb3VwO1xyXG4gIG1lbnNhamU6IHN0cmluZyA9ICcnO1xyXG4gIGVycm9yTWVzc2FnZTogc3RyaW5nIHwgbnVsbCA9IG51bGw7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBmYjogRm9ybUJ1aWxkZXIsXHJcbiAgICBwcml2YXRlIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcclxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJcclxuICApIHtcclxuICAgIHRoaXMubG9naW5Gb3JtID0gdGhpcy5mYi5ncm91cCh7XHJcbiAgICAgIGVtYWlsOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLmVtYWlsXV0sXHJcbiAgICAgIHBhc3N3b3JkOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLm1pbkxlbmd0aCg2KV1dLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBsb2dpbigpIHtcclxuICAgIGlmICh0aGlzLmxvZ2luRm9ybS5pbnZhbGlkKSB7XHJcbiAgICAgIHRoaXMubWVuc2FqZSA9ICdQb3IgZmF2b3IgY29tcGxldGUgZWwgZm9ybXVsYXJpbyBjb3JyZWN0YW1lbnRlJztcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHsgZW1haWwsIHBhc3N3b3JkIH0gPSB0aGlzLmxvZ2luRm9ybS52YWx1ZTtcclxuXHJcbiAgICB0aGlzLmF1dGhTZXJ2aWNlLmxvZ2luKGVtYWlsLCBwYXNzd29yZCkuc3Vic2NyaWJlKHtcclxuICAgICAgbmV4dDogKHJlcykgPT4ge1xyXG4gICAgICAgIHRoaXMubWVuc2FqZSA9IGBCaWVudmVuaWRvLCAke3Jlcy51c3VhcmlvLm5vbWJyZX1gO1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2Rhc2hib2FyZC9hZG1pbiddKTtcclxuICAgICAgfSxcclxuICAgICAgZXJyb3I6IChlcnIpID0+IHtcclxuICAgICAgICBTd2FsLmZpcmUoe1xyXG4gICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgdGl0bGU6ICdPb3BzLi4uJyxcclxuICAgICAgICB0ZXh0OiBlcnIuZXJyb3I/Lm1lc3NhZ2UgfHwgJ09jdXJyacOzIHVuIGVycm9yIGluZXNwZXJhZG8nLFxyXG4gICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiAnQWNlcHRhcicsXHJcbiAgICAgICAgY3VzdG9tQ2xhc3M6IHtcclxuICAgICAgICAgIGh0bWxDb250YWluZXI6ICdzd2FsLXRleHQtcmVkJ1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iLCJcclxuPHNlY3Rpb24gY2xhc3M9XCJiZy1ncmF5LTUwIGRhcms6YmctZ3JheS05MDBcIj5cclxuICA8ZGl2IGNsYXNzPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcHgtNiBweS04IG14LWF1dG8gbWQ6aC1zY3JlZW4gbGc6cHktMFwiPlxyXG4gICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwiZmxleCBpdGVtcy1jZW50ZXIgbWItNiB0ZXh0LTJ4bCBmb250LXNlbWlib2xkIHRleHQtZ3JheS05MDAgZGFyazp0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICA8aW1nIGNsYXNzPVwidy0xNiBoLTE2IG1yLTJcIiBzcmM9XCJhc3NldHMvbG9nby5qcGdcIiBhbHQ9XCJsb2dvXCI+XHJcbiAgICAgICAgICBMYW1hZ2EgRGlzdHJpYnVjaW9uZXMgICAgXHJcbiAgICAgIDwvYT5cclxuICAgICAgPGRpdiBjbGFzcz1cInctZnVsbCBiZy13aGl0ZSByb3VuZGVkLWxnIHNoYWRvdyBkYXJrOmJvcmRlciBtZDptdC0wIHNtOm1heC13LW1kIHhsOnAtMCBkYXJrOmJnLWdyYXktODAwIGRhcms6Ym9yZGVyLWdyYXktNzAwXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicC02IHNwYWNlLXktNCBtZDpzcGFjZS15LTYgc206cC04XCI+XHJcbiAgICAgICAgICAgICAgPGgxIGNsYXNzPVwidGV4dC14bCBmb250LWJvbGQgbGVhZGluZy10aWdodCB0cmFja2luZy10aWdodCB0ZXh0LWdyYXktOTAwIG1kOnRleHQtMnhsIGRhcms6dGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICBJbmljaWFyIHNlc2nDs24gY29uIHR1IGN1ZW50YVxyXG4gICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgICAgPGZvcm0gW2Zvcm1Hcm91cF09XCJsb2dpbkZvcm1cIiAobmdTdWJtaXQpPVwibG9naW4oKVwiIGNsYXNzPVwic3BhY2UteS00IG1kOnNwYWNlLXktNlwiID5cclxuICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJlbWFpbFwiIGNsYXNzPVwiYmxvY2sgbWItMiB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDAgZGFyazp0ZXh0LXdoaXRlXCI+VHUgY29ycmVvPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBtYXRJbnB1dCB0eXBlPVwiZW1haWxcIiBmb3JtQ29udHJvbE5hbWU9XCJlbWFpbFwiIHJlcXVpcmVkICB0eXBlPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiBpZD1cImVtYWlsXCIgY2xhc3M9XCJiZy1ncmF5LTUwIGJvcmRlciBib3JkZXItZ3JheS0zMDAgdGV4dC1ncmF5LTkwMCByb3VuZGVkLWxnIGZvY3VzOnJpbmctcHJpbWFyeS02MDAgZm9jdXM6Ym9yZGVyLXByaW1hcnktNjAwIGJsb2NrIHctZnVsbCBwLTIuNSBkYXJrOmJnLWdyYXktNzAwIGRhcms6Ym9yZGVyLWdyYXktNjAwIGRhcms6cGxhY2Vob2xkZXItZ3JheS00MDAgZGFyazp0ZXh0LXdoaXRlIGRhcms6Zm9jdXM6cmluZy1ibHVlLTUwMCBkYXJrOmZvY3VzOmJvcmRlci1ibHVlLTUwMCBwbGFjZWhvbGRlcjpvcGFjaXR5LTMwXCIgcGxhY2Vob2xkZXI9XCJ0dWVtYWlsQGxhbWFnYS5lY1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwibG9naW5Gb3JtLmdldCgnZW1haWwnKT8uaGFzRXJyb3IoJ2VtYWlsJylcIiBjbGFzcz1cIm10LTEgdGV4dC1zbSB0ZXh0LXJlZC02MDAgZGFyazp0ZXh0LXJlZC00MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEluZ3Jlc2EgdW4gZW1haWwgdsOhbGlkb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwYXNzd29yZFwiIGNsYXNzPVwiYmxvY2sgbWItMiB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDAgZGFyazp0ZXh0LXdoaXRlXCI+VHUgY29udHJhc2XDsWE8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0IG1hdElucHV0IHR5cGU9XCJwYXNzd29yZFwiIGZvcm1Db250cm9sTmFtZT1cInBhc3N3b3JkXCIgcmVxdWlyZWQgdHlwZT1cInBhc3N3b3JkXCIgbmFtZT1cInBhc3N3b3JkXCIgaWQ9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwi4oCi4oCi4oCi4oCi4oCi4oCi4oCi4oCiXCIgY2xhc3M9XCJiZy1ncmF5LTUwIGJvcmRlciBib3JkZXItZ3JheS0zMDAgdGV4dC1ncmF5LTkwMCByb3VuZGVkLWxnIGZvY3VzOnJpbmctcHJpbWFyeS02MDAgZm9jdXM6Ym9yZGVyLXByaW1hcnktNjAwIGJsb2NrIHctZnVsbCBwLTIuNSBkYXJrOmJnLWdyYXktNzAwIGRhcms6Ym9yZGVyLWdyYXktNjAwIGRhcms6cGxhY2Vob2xkZXItZ3JheS00MDAgZGFyazp0ZXh0LXdoaXRlIGRhcms6Zm9jdXM6cmluZy1ibHVlLTUwMCBkYXJrOmZvY3VzOmJvcmRlci1ibHVlLTUwMCBwbGFjZWhvbGRlcjpvcGFjaXR5LTMwXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwibG9naW5Gb3JtLmdldCgncGFzc3dvcmQnKT8uaGFzRXJyb3IoJ3JlcXVpcmVkJylcIiBjbGFzcz1cIm10LTEgdGV4dC1zbSB0ZXh0LXJlZC02MDAgZGFyazp0ZXh0LXJlZC00MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbnRyYXNlw7FhIGluY29ycmVjdGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJnLXBpbmstNTAwIGhvdmVyOmJnLXBpbmstNjAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkIGJsb2NrIHctZnVsbFwiIFtkaXNhYmxlZF09XCJsb2dpbkZvcm0uaW52YWxpZFwiPkluZ3Jlc2FyPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3NlY3Rpb24+IiwiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgQ29tcG9uZW50LCBIb3N0TGlzdGVuZXIgIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSwgUm91dGVyT3V0bGV0IH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uL2F1dGgvdXNlci5tb2RlbCc7XHJcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vYXV0aC9hdXRoLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLWRhc2hib2FyZCcsXHJcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBSb3V0ZXJPdXRsZXQsXHJcbiAgICBSb3V0ZXJNb2R1bGUsXHJcbiAgXSxcclxuICB0ZW1wbGF0ZVVybDogJy4vZGFzaGJvYXJkLmh0bWwnLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIERhc2hib2FyZENvbXBvbmVudCB7XHJcbiAgb3BlbmVkID0gdHJ1ZTtcclxuICBpc01vYmlsZSA9IGZhbHNlO1xyXG4gIHVzZXI6IFVzZXIgfCBudWxsID0gbnVsbDs7XHJcbiAgZ3J1cG9UcmFuc2FjY2lvbmVzT3BlbiA9IGZhbHNlO1xyXG4gIGdydXBvUmVwb3J0ZXNPcGVuID0gZmFsc2U7XHJcbiAgcHJvZmlsZU9wZW4gPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xyXG4gICAgdGhpcy5jaGVja1NjcmVlblNpemUoKTtcclxuICB9XHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLnVzZXIgPSB0aGlzLmF1dGhTZXJ2aWNlLmdldFVzdWFyaW9BY3R1YWwoKTtcclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpyZXNpemUnKVxyXG4gIGNoZWNrU2NyZWVuU2l6ZSgpIHtcclxuICAgIHRoaXMuaXNNb2JpbGUgPSB3aW5kb3cuaW5uZXJXaWR0aCA8IDc2ODtcclxuICAgIC8vIHNpIGNhbWJpYXMgYSBtw7N2aWwgY2VycmFtb3MgZWwgc2lkZWJhciBwb3IgZGVmZWN0b1xyXG4gICAgdGhpcy5vcGVuZWQgPSAhdGhpcy5pc01vYmlsZTtcclxuICB9XHJcblxyXG4gIHRvZ2dsZVNpZGViYXIoKSB7XHJcbiAgICB0aGlzLm9wZW5lZCA9ICF0aGlzLm9wZW5lZDtcclxuICB9XHJcblxyXG4gIC8vIGNlcnJhciBlbCBzaWRlYmFyIHNpIGVzdGFtb3MgZW4gbcOzdmlsIChsbGFtYXIgZGVzZGUgY2FkYSBsaW5rKVxyXG4gIGNsb3NlT25Nb2JpbGUoKSB7XHJcbiAgICBpZiAodGhpcy5pc01vYmlsZSkge1xyXG4gICAgICB0aGlzLm9wZW5lZCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgLy8gY2VycmFyIG1lbsO6cyBzb2JyZXB1ZXN0b3NcclxuICAgIHRoaXMucHJvZmlsZU9wZW4gPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIGxvZ291dCgpIHtcclxuICAgIHRoaXMuYXV0aFNlcnZpY2UubG9nb3V0KCk7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9sb2dpbiddKTtcclxuICB9XHJcbn1cclxuIiwiPCEtLSBkYXNoYm9hcmQuY29tcG9uZW50Lmh0bWwgLS0+XHJcbjwhLS0gUmVxdWllcmUgVGFpbHdpbmQgZW4gZWwgcHJveWVjdG8geSAob3BjaW9uYWwpIE1hdGVyaWFsIEljb25zIHNpIHF1aWVyZXMgdXNhciBlc29zIMOtY29ub3MgLS0+XHJcbjxkaXYgY2xhc3M9XCJmbGV4IGgtc2NyZWVuIGJnLWdyYXktNTBcIj5cclxuXHJcbiAgPCEtLSBPdmVybGF5IChzb2xvIGVuIG3Ds3ZpbCBjdWFuZG8gZWwgc2lkZWJhciBlc3TDoSBhYmllcnRvKSAtLT5cclxuICA8ZGl2XHJcbiAgICAqbmdJZj1cImlzTW9iaWxlICYmIG9wZW5lZFwiXHJcbiAgICAoY2xpY2spPVwidG9nZ2xlU2lkZWJhcigpXCJcclxuICAgIGNsYXNzPVwiZml4ZWQgaW5zZXQtMCBiZy1ibGFjayBiZy1vcGFjaXR5LTQwIHotMjAgbWQ6aGlkZGVuXCJcclxuICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgPjwvZGl2PlxyXG5cclxuICA8IS0tIFNJREVCQVIgLS0+XHJcbiAgPGFzaWRlXHJcbiAgICBjbGFzcz1cImJnLXdoaXRlIGJvcmRlci1yIGJvcmRlci1ncmF5LTIwMCBmbGV4IGZsZXgtY29sIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCB6LTMwXCJcclxuICAgIFtuZ0NsYXNzXT1cIm9wZW5lZCA/ICd3LTU2JyA6ICd3LTE2J1wiXHJcbiAgICBhcmlhLWxhYmVsPVwiU2lkZWJhclwiXHJcbiAgPlxyXG4gICAgPCEtLSBMb2dvIC8gaGVhZGVyIC0tPlxyXG4gICAgPGRpdiByb3V0ZXJMaW5rPVwiL2Rhc2hib2FyZC9hZG1pblwiICBjbGFzcz1cImgtMTYgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgYm9yZGVyLWIgYm9yZGVyLWdyYXktMjAwIHB4LTJcIj5cclxuICAgICAgPGltZyBzcmM9XCJhc3NldHMvbG9nby5qcGdcIiBhbHQ9XCJMb2dvXCIgY2xhc3M9XCJoLTEwIG9iamVjdC1jb250YWluXCIgLz5cclxuICAgICAgPHNwYW4gKm5nSWY9XCJvcGVuZWRcIiBjbGFzcz1cIm1sLTIgZm9udC1zZW1pYm9sZCB0ZXh0LXBpbmstNTAwXCI+UE9TPC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPCEtLSBNZW51IC0tPlxyXG4gICAgPG5hdiBjbGFzcz1cImZsZXgtMSBvdmVyZmxvdy15LWF1dG8gcC0yXCIgcm9sZT1cIm5hdmlnYXRpb25cIj5cclxuICAgICAgQGlmIChhdXRoU2VydmljZS5lc0FkbWluKCkgfHwgYXV0aFNlcnZpY2UuZXNDYWplcm8oKSAgKSB7XHJcbiAgICAgIDxhXHJcbiAgICAgICAgcm91dGVyTGluaz1cIi9kYXNoYm9hcmQvdXN1YXJpb3NcIlxyXG4gICAgICAgIHJvdXRlckxpbmtBY3RpdmU9XCJiZy1ibHVlLTUwIHRleHQtYmx1ZS03MDBcIlxyXG4gICAgICAgIGNsYXNzPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTMgcHgtMyBweS0yIG1iLTEgcm91bmRlZC1tZCBob3ZlcjpiZy1waW5rLTUwIHRyYW5zaXRpb24tY29sb3JzIHRleHQtZ3JheS03MDBcIlxyXG4gICAgICAgIChjbGljayk9XCJjbG9zZU9uTW9iaWxlKClcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucyB0ZXh0LWJsdWUtNjAwXCI+cGVvcGxlPC9zcGFuPlxyXG4gICAgICAgIDxzcGFuICpuZ0lmPVwib3BlbmVkXCIgY2xhc3M9XCJ0cnVuY2F0ZVwiPlVzdWFyaW9zPC9zcGFuPlxyXG4gICAgICA8L2E+XHJcbiAgICB9XHJcbiAgICAgIEBpZiAoYXV0aFNlcnZpY2UuZXNBZG1pbigpKSB7XHJcbiAgICAgIDxhXHJcbiAgICAgICAgcm91dGVyTGluaz1cIi9kYXNoYm9hcmQvbGlzdGEtZW1wcmVzYVwiXHJcbiAgICAgICAgcm91dGVyTGlua0FjdGl2ZT1cImJnLWJsdWUtNTAgdGV4dC1ibHVlLTcwMFwiXHJcbiAgICAgICAgY2xhc3M9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMyBweC0zIHB5LTIgbWItMSByb3VuZGVkLW1kIGhvdmVyOmJnLXBpbmstNTAgdHJhbnNpdGlvbi1jb2xvcnMgdGV4dC1ncmF5LTcwMFwiXHJcbiAgICAgICAgKGNsaWNrKT1cImNsb3NlT25Nb2JpbGUoKVwiXHJcbiAgICAgID5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zIHRleHQtZ3JlZW4tNjAwXCI+YXBhcnRtZW50PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuICpuZ0lmPVwib3BlbmVkXCIgY2xhc3M9XCJ0cnVuY2F0ZVwiPkVtcHJlc2E8L3NwYW4+XHJcbiAgICAgIDwvYT5cclxuICAgIH1cclxuICAgICAgPGFcclxuICAgICAgICByb3V0ZXJMaW5rPVwiL2Rhc2hib2FyZC9jbGllbnRlc1wiXHJcbiAgICAgICAgcm91dGVyTGlua0FjdGl2ZT1cImJnLWJsdWUtNTAgdGV4dC1ibHVlLTcwMFwiXHJcbiAgICAgICAgY2xhc3M9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMyBweC0zIHB5LTIgbWItMSByb3VuZGVkLW1kIGhvdmVyOmJnLXBpbmstNTAgdHJhbnNpdGlvbi1jb2xvcnMgdGV4dC1ncmF5LTcwMFwiXHJcbiAgICAgICAgKGNsaWNrKT1cImNsb3NlT25Nb2JpbGUoKVwiXHJcbiAgICAgID5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zIHRleHQtcHVycGxlLTYwMFwiPnBlcnNvbjwvc3Bhbj5cclxuICAgICAgICA8c3BhbiAqbmdJZj1cIm9wZW5lZFwiIGNsYXNzPVwidHJ1bmNhdGVcIj5DbGllbnRlczwvc3Bhbj5cclxuICAgICAgPC9hPlxyXG5cclxuICAgICAgPGFcclxuICAgICAgICByb3V0ZXJMaW5rPVwiL2Rhc2hib2FyZC9wcm9kdWN0b3NcIlxyXG4gICAgICAgIHJvdXRlckxpbmtBY3RpdmU9XCJiZy1ibHVlLTUwIHRleHQtYmx1ZS03MDBcIlxyXG4gICAgICAgIGNsYXNzPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTMgcHgtMyBweS0yIG1iLTEgcm91bmRlZC1tZCBob3ZlcjpiZy1waW5rLTUwIHRyYW5zaXRpb24tY29sb3JzIHRleHQtZ3JheS03MDBcIlxyXG4gICAgICAgIChjbGljayk9XCJjbG9zZU9uTW9iaWxlKClcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucyB0ZXh0LW9yYW5nZS02MDBcIj5pbnZlbnRvcnlfMjwvc3Bhbj5cclxuICAgICAgICA8c3BhbiAqbmdJZj1cIm9wZW5lZFwiIGNsYXNzPVwidHJ1bmNhdGVcIj5Qcm9kdWN0b3M8L3NwYW4+XHJcbiAgICAgIDwvYT5cclxuXHJcbiA8IS0tIFRyYW5zYWNjaW9uZXMgLS0+XHJcbjxkaXYgY2xhc3M9XCJtdC0yIHJlbGF0aXZlXCI+XHJcbiAgPGJ1dHRvblxyXG4gICAgKGNsaWNrKT1cImdydXBvVHJhbnNhY2Npb25lc09wZW4gPSAhZ3J1cG9UcmFuc2FjY2lvbmVzT3BlblwiXHJcbiAgICBjbGFzcz1cInctZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMyBweC0zIHB5LTIgcm91bmRlZC1tZCBob3ZlcjpiZy1waW5rLTUwIHRyYW5zaXRpb24tY29sb3JzIHRleHQtZ3JheS03MDBcIlxyXG4gICAgW2F0dHIuYXJpYS1leHBhbmRlZF09XCJncnVwb1RyYW5zYWNjaW9uZXNPcGVuXCJcclxuICA+XHJcbiAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zIHRleHQtcmVkLTYwMFwiPnN5bmNfYWx0PC9zcGFuPlxyXG4gICAgPHNwYW4gKm5nSWY9XCJvcGVuZWRcIiBjbGFzcz1cImZsZXgtMSB0ZXh0LWxlZnRcIj5UcmFuc2FjY2lvbmVzPC9zcGFuPlxyXG4gICAgPHNwYW4gKm5nSWY9XCJvcGVuZWRcIiBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+XHJcbiAgICAgIHt7IGdydXBvVHJhbnNhY2Npb25lc09wZW4gPyAnZXhwYW5kX2xlc3MnIDogJ2V4cGFuZF9tb3JlJyB9fVxyXG4gICAgPC9zcGFuPlxyXG4gIDwvYnV0dG9uPlxyXG5cclxuICA8IS0tIFN1Ym1lbsO6IC0tPlxyXG4gIDxkaXZcclxuICAgICpuZ0lmPVwiZ3J1cG9UcmFuc2FjY2lvbmVzT3BlblwiXHJcbiAgICBbbmdDbGFzc109XCJvcGVuZWQgPyAncGwtMTAgbXQtMScgOiAnYWJzb2x1dGUgbGVmdC1mdWxsIHRvcC0wIG10LTAgdy00NCBiZy13aGl0ZSBzaGFkb3ctbGcgcm91bmRlZCB6LTUwIHAtMidcIlxyXG4gID5cclxuICAgIDxhXHJcbiAgICAgIHJvdXRlckxpbms9XCIvZGFzaGJvYXJkL2NhamFzXCJcclxuICAgICAgcm91dGVyTGlua0FjdGl2ZT1cImJnLWJsdWUtMTAwIHRleHQtYmx1ZS03MDBcIlxyXG4gICAgICBjbGFzcz1cImZsZXggaXRlbXMtY2VudGVyIHB4LTMgcHktMiBtYi0xIHJvdW5kZWQtbWQgaG92ZXI6YmctYmx1ZS01MCB0ZXh0LWdyYXktNzAwXCJcclxuICAgID5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucyBtci0yIHRleHQteWVsbG93LTYwMFwiPnBvaW50X29mX3NhbGU8L3NwYW4+XHJcbiAgICAgIDxzcGFuICpuZ0lmPVwib3BlbmVkXCI+Q2FqYTwvc3Bhbj5cclxuICAgICAgPHNwYW4gKm5nSWY9XCIhb3BlbmVkXCI+Q2FqYTwvc3Bhbj5cclxuICAgIDwvYT5cclxuXHJcbiAgICA8YVxyXG4gICAgICByb3V0ZXJMaW5rPVwiL2Rhc2hib2FyZC9jb3RpemFjaW9uZXNcIlxyXG4gICAgICByb3V0ZXJMaW5rQWN0aXZlPVwiYmctYmx1ZS0xMDAgdGV4dC1ibHVlLTcwMFwiXHJcbiAgICAgIGNsYXNzPVwiZmxleCBpdGVtcy1jZW50ZXIgcHgtMyBweS0yIG1iLTEgcm91bmRlZC1tZCBob3ZlcjpiZy1ibHVlLTUwIHRleHQtZ3JheS03MDBcIlxyXG4gICAgPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zIG1yLTIgdGV4dC1ncmVlbi02MDBcIj5yZXF1ZXN0X3F1b3RlPC9zcGFuPlxyXG4gICAgICA8c3BhbiAqbmdJZj1cIm9wZW5lZFwiPkNvdGl6YWNpb25lczwvc3Bhbj5cclxuICAgICAgPHNwYW4gKm5nSWY9XCIhb3BlbmVkXCI+Q290aXphY2lvbmVzPC9zcGFuPlxyXG4gICAgPC9hPlxyXG5cclxuICAgIDxhXHJcbiAgICAgIHJvdXRlckxpbms9XCIvZGFzaGJvYXJkL2ZhY3R1cmFzXCJcclxuICAgICAgcm91dGVyTGlua0FjdGl2ZT1cImJnLWJsdWUtMTAwIHRleHQtYmx1ZS03MDBcIlxyXG4gICAgICBjbGFzcz1cImZsZXggaXRlbXMtY2VudGVyIHB4LTMgcHktMiBtYi0xIHJvdW5kZWQtbWQgaG92ZXI6YmctYmx1ZS01MCB0ZXh0LWdyYXktNzAwXCJcclxuICAgID5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucyBtci0yIHRleHQtcHVycGxlLTYwMFwiPnJlY2VpcHRfbG9uZzwvc3Bhbj5cclxuICAgICAgPHNwYW4gKm5nSWY9XCJvcGVuZWRcIj5GYWN0dXJhczwvc3Bhbj5cclxuICAgICAgPHNwYW4gKm5nSWY9XCIhb3BlbmVkXCI+RmFjdHVyYXM8L3NwYW4+XHJcbiAgICA8L2E+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG5cclxuPCEtLSBSZXBvcnRlcyAtLT5cclxuPGRpdiBjbGFzcz1cIm10LTIgcmVsYXRpdmVcIj5cclxuICA8YnV0dG9uXHJcbiAgICAoY2xpY2spPVwiZ3J1cG9SZXBvcnRlc09wZW4gPSAhZ3J1cG9SZXBvcnRlc09wZW5cIlxyXG4gICAgY2xhc3M9XCJ3LWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTMgcHgtMyBweS0yIHJvdW5kZWQtbWQgaG92ZXI6YmctcGluay01MCB0cmFuc2l0aW9uLWNvbG9ycyB0ZXh0LWdyYXktNzAwXCJcclxuICAgIFthdHRyLmFyaWEtZXhwYW5kZWRdPVwiZ3J1cG9SZXBvcnRlc09wZW5cIlxyXG4gID5cclxuICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMgdGV4dC1yZWQtNjAwXCI+dHJlbmRpbmdfdXA8L3NwYW4+XHJcbiAgICA8c3BhbiAqbmdJZj1cIm9wZW5lZFwiIGNsYXNzPVwiZmxleC0xIHRleHQtbGVmdFwiPlJlcG9ydGVzPC9zcGFuPlxyXG4gICAgPHNwYW4gKm5nSWY9XCJvcGVuZWRcIiBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+XHJcbiAgICAgIHt7IGdydXBvUmVwb3J0ZXNPcGVuID8gJ2V4cGFuZF9sZXNzJyA6ICdleHBhbmRfbW9yZScgfX1cclxuICAgIDwvc3Bhbj5cclxuICA8L2J1dHRvbj5cclxuXHJcbiAgPCEtLSBTdWJtZW7DuiAtLT5cclxuICA8ZGl2XHJcbiAgICAqbmdJZj1cImdydXBvUmVwb3J0ZXNPcGVuXCJcclxuICAgIFtuZ0NsYXNzXT1cIm9wZW5lZCA/ICdwbC0xMCBtdC0xJyA6ICdhYnNvbHV0ZSBsZWZ0LWZ1bGwgdG9wLTAgbXQtMCB3LTQ0IGJnLXdoaXRlIHNoYWRvdy1sZyByb3VuZGVkIHotNTAgcC0yJ1wiXHJcbiAgPlxyXG4gICAgPGFcclxuICAgICAgcm91dGVyTGluaz1cIi9kYXNoYm9hcmQvcmVwb3J0ZXMvbWVuc3VhbGVzXCJcclxuICAgICAgcm91dGVyTGlua0FjdGl2ZT1cImJnLWJsdWUtMTAwIHRleHQtYmx1ZS03MDBcIlxyXG4gICAgICBjbGFzcz1cImZsZXggaXRlbXMtY2VudGVyIHB4LTMgcHktMiBtYi0xIHJvdW5kZWQtbWQgaG92ZXI6YmctYmx1ZS01MCB0ZXh0LWdyYXktNzAwXCJcclxuICAgID5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucyBtci0yIHRleHQteWVsbG93LTYwMFwiPnBheW1lbnRzPC9zcGFuPlxyXG4gICAgICA8c3BhbiAqbmdJZj1cIm9wZW5lZFwiPk1lbnN1YWxlczwvc3Bhbj5cclxuICAgICAgPHNwYW4gKm5nSWY9XCIhb3BlbmVkXCI+TWVuc3VhbGVzPC9zcGFuPlxyXG4gICAgPC9hPlxyXG5cclxuICAgIDxhXHJcbiAgICAgIHJvdXRlckxpbms9XCIvZGFzaGJvYXJkL3JlcG9ydGVzL3ZlbnRhc1wiXHJcbiAgICAgIHJvdXRlckxpbmtBY3RpdmU9XCJiZy1ibHVlLTEwMCB0ZXh0LWJsdWUtNzAwXCJcclxuICAgICAgY2xhc3M9XCJmbGV4IGl0ZW1zLWNlbnRlciBweC0zIHB5LTIgbWItMSByb3VuZGVkLW1kIGhvdmVyOmJnLWJsdWUtNTAgdGV4dC1ncmF5LTcwMFwiXHJcbiAgICA+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMgbXItMiB0ZXh0LWdyZWVuLTYwMFwiPnBlcnNvbl9zZWFyY2g8L3NwYW4+XHJcbiAgICAgIDxzcGFuICpuZ0lmPVwib3BlbmVkXCI+UG9yIGFzZXNvcjwvc3Bhbj5cclxuICAgICAgPHNwYW4gKm5nSWY9XCIhb3BlbmVkXCI+UG9yIGFzZXNvcjwvc3Bhbj5cclxuICAgIDwvYT5cclxuXHJcbiAgICA8YVxyXG4gICAgICByb3V0ZXJMaW5rPVwiL2Rhc2hib2FyZC9hbnVhbGVzXCJcclxuICAgICAgcm91dGVyTGlua0FjdGl2ZT1cImJnLWJsdWUtMTAwIHRleHQtYmx1ZS03MDBcIlxyXG4gICAgICBjbGFzcz1cImZsZXggaXRlbXMtY2VudGVyIHB4LTMgcHktMiBtYi0xIHJvdW5kZWQtbWQgaG92ZXI6YmctYmx1ZS01MCB0ZXh0LWdyYXktNzAwXCJcclxuICAgID5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucyBtci0yIHRleHQtcHVycGxlLTYwMFwiPmJhcl9jaGFydDwvc3Bhbj5cclxuICAgICAgPHNwYW4gKm5nSWY9XCJvcGVuZWRcIj5BbnVhbGVzPC9zcGFuPlxyXG4gICAgICA8c3BhbiAqbmdJZj1cIiFvcGVuZWRcIj5BbnVhbGVzPC9zcGFuPlxyXG4gICAgPC9hPlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuXHJcbiAgICA8L25hdj5cclxuXHJcbiAgICA8IS0tIEZvb3RlciAodG9nZ2xlKSAtLT5cclxuICAgIDxkaXYgY2xhc3M9XCJib3JkZXItdCBib3JkZXItZ3JheS0xMDAgcC0yXCI+XHJcbiAgICAgIDxidXR0b25cclxuICAgICAgICBjbGFzcz1cInctZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtMiBweC0yIHB5LTIgcm91bmRlZC1tZCBob3ZlcjpiZy1ncmF5LTEwMFwiXHJcbiAgICAgICAgKGNsaWNrKT1cIm9wZW5lZCA9ICFvcGVuZWRcIlxyXG4gICAgICAgIFthdHRyLmFyaWEtcHJlc3NlZF09XCJvcGVuZWRcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPnt7IG9wZW5lZCA/ICdjaGV2cm9uX2xlZnQnIDogJ2NoZXZyb25fcmlnaHQnIH19PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuICpuZ0lmPVwib3BlbmVkXCIgY2xhc3M9XCJ0ZXh0LXNtXCI+Q29sYXBzYXI8L3NwYW4+XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9hc2lkZT5cclxuXHJcbiAgPCEtLSBNQUlOIENPTlRFTlQgLS0+XHJcbiAgPGRpdiBjbGFzcz1cImZsZXgtMSBmbGV4IGZsZXgtY29sXCI+XHJcbiAgICA8IS0tIFRvcGJhciAtLT5cclxuICAgIDxoZWFkZXIgY2xhc3M9XCJoLTE2IGJnLXBpbmstNTAwIHRleHQtd2hpdGUgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHB4LTQgc2hhZG93LXNtXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtM1wiPlxyXG4gICAgICAgIDwhLS0gc2hvdyBtZW51IGJ1dHRvbiBvbiBzbWFsbCBzY3JlZW5zIC0tPlxyXG4gICAgICAgIDxidXR0b24gKGNsaWNrKT1cInRvZ2dsZVNpZGViYXIoKVwiIGNsYXNzPVwicC0yIHJvdW5kZWQtbWQgbWQ6aGlkZGVuIGJnLWJsdWUtNzAwLzIwIGhvdmVyOmJnLWJsdWUtNzAwLzMwXCI+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+bWVudTwvc3Bhbj5cclxuICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImhpZGRlbiBtZDpmbGV4IGl0ZW1zLWNlbnRlciBnYXAtM1wiPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPmRhc2hib2FyZDwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZm9udC1zZW1pYm9sZFwiPkxBIE1BR0EgRElTVFJJQlVDSU9ORVM8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzcz1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0zXCIgKm5nSWY9XCJ1c2VyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtc21cIj57eyB1c2VyLmVtYWlsIH19PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInJlbGF0aXZlXCI+XHJcbiAgICAgICAgICA8YnV0dG9uIChjbGljayk9XCJwcm9maWxlT3BlbiA9ICFwcm9maWxlT3BlblwiIGNsYXNzPVwicC0xIHJvdW5kZWQtZnVsbCBiZy1ibHVlLTcwMC8yMCBob3ZlcjpiZy1ibHVlLTcwMC8zMFwiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+YWNjb3VudF9jaXJjbGU8L3NwYW4+XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDxkaXYgKm5nSWY9XCJwcm9maWxlT3BlblwiIGNsYXNzPVwiYWJzb2x1dGUgcmlnaHQtMCBtdC0yIHctNDAgYmctd2hpdGUgdGV4dC1ncmF5LTgwMCByb3VuZGVkIHNoYWRvdy1sZyB6LTQwXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gKGNsaWNrKT1cImxvZ291dCgpXCIgY2xhc3M9XCJ3LWZ1bGwgdGV4dC1sZWZ0IHB4LTMgcHktMiBob3ZlcjpiZy1ncmF5LTEwMFwiPkNlcnJhciBzZXNpw7NuPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2hlYWRlcj5cclxuXHJcbiAgICA8IS0tIFBhZ2UgY29udGVudCAtLT5cclxuICAgIDxtYWluIGNsYXNzPVwiZmxleC0xIG92ZXJmbG93LWF1dG8gcC00XCI+XHJcbiAgICAgIDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cclxuICAgIDwvbWFpbj5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcbiIsImltcG9ydCB7IGluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDYW5BY3RpdmF0ZUZuLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uL2F1dGgvYXV0aC5zZXJ2aWNlJztcclxuXHJcbmV4cG9ydCBjb25zdCBhdXRoR3VhcmQ6IENhbkFjdGl2YXRlRm4gPSAoKSA9PiB7XHJcbiAgY29uc3QgYXV0aFNlcnZpY2UgPSBpbmplY3QoQXV0aFNlcnZpY2UpO1xyXG4gIGNvbnN0IHJvdXRlciA9IGluamVjdChSb3V0ZXIpO1xyXG5cclxuICBpZiAoYXV0aFNlcnZpY2UuaXNBdXRoZW50aWNhdGVkKCkpIHtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByb3V0ZXIubmF2aWdhdGUoWycvbG9naW4nXSk7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG59O1xyXG5cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzdGFuZGFsb25lOiB0cnVlLFxyXG4gIHNlbGVjdG9yOiAnYXBwLW5vdC1mb3VuZCcsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxoMT5Qw6FnaW5hIG5vIGVuY29udHJhZGEgKDQwNCk8L2gxPlxyXG4gICAgPHA+TGEgcnV0YSBxdWUgYnVzY2FzIG5vIGV4aXN0ZS48L3A+XHJcbiAgYCxcclxufSlcclxuZXhwb3J0IGNsYXNzIE5vdEZvdW5kQ29tcG9uZW50IHt9XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOb3RhQ3JlZGl0b1NlcnZpY2UgfSBmcm9tICcuL25vdGFjcmVkaXRvLnNlcnZpY2VzJztcbmltcG9ydCB7IEZhY3R1cmEgfSBmcm9tICcuLi9mYWN0dXJhL2ZhY3R1cmEubW9kZWwnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1ub3RhLWNyZWRpdG8nLFxuICB0ZW1wbGF0ZVVybDogJ25vdGFjcmVkaXRvLmh0bWwnLFxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBGb3Jtc01vZHVsZV0sXG4gIHN0eWxlVXJsczogWydub3RhY3JlZGl0by5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBOb3RhQ3JlZGl0b0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgZmFjdHVyYXM6IEZhY3R1cmFbXSA9IFtdO1xuICBmYWN0dXJhU2VsZWNjaW9uYWRhOiBGYWN0dXJhIHwgbnVsbCA9IG51bGw7XG4gIGRldGFsbGVzOiBhbnlbXSA9IFtdO1xuICB0aXBvOiBzdHJpbmcgPSBcIlwiO1xuICBtb2RhbE9wZW4gPSBmYWxzZTtcbiAgYnVzY2Fkb3IgPSBcIlwiO1xuICByYXpvbiA9IFwiXCI7XG4gIGNsYXZlQWNjZXNvID0gXCJcIjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG5vdGFDcmVkaXRvU2VydmljZTogTm90YUNyZWRpdG9TZXJ2aWNlKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuY2FyZ2FyRmFjdHVyYXMoKTtcbiAgfVxuXG4gIGNhcmdhckZhY3R1cmFzKCkge1xuICAgIHRoaXMubm90YUNyZWRpdG9TZXJ2aWNlLm9idGVuZXJGYWN0dXJhcygpLnN1YnNjcmliZSh7XG4gICAgICBuZXh0OiAoZGF0YSkgPT4ge1xuICAgICAgICB0aGlzLmZhY3R1cmFzID0gZGF0YTtcbiAgICAgIH0sXG4gICAgICBlcnJvcjogKGVycikgPT4gY29uc29sZS5lcnJvcihcIkVycm9yIGNhcmdhbmRvIGZhY3R1cmFzOlwiLCBlcnIpXG4gICAgfSk7XG4gIH1cblxuICBhYnJpck1vZGFsKCkge1xuICAgIHRoaXMubW9kYWxPcGVuID0gdHJ1ZTtcbiAgfVxuXG4gIGNlcnJhck1vZGFsKCkge1xuICAgIHRoaXMubW9kYWxPcGVuID0gZmFsc2U7XG4gIH1cblxuICBmYWN0dXJhc0ZpbHRyYWRhcygpIHtcbiAgICByZXR1cm4gdGhpcy5mYWN0dXJhcy5maWx0ZXIoZiA9PlxuICAgICAgZi5zZWN1ZW5jaWFsLnRvU3RyaW5nKCkuaW5jbHVkZXModGhpcy5idXNjYWRvcilcbiAgICApO1xuICB9XG5cbiAgc2VsZWNjaW9uYXJGYWN0dXJhKGZhY3R1cmE6IEZhY3R1cmEpIHtcbiAgICB0aGlzLmZhY3R1cmFTZWxlY2Npb25hZGEgPSBmYWN0dXJhO1xuICAgIHRoaXMuZGV0YWxsZXMgPSBmYWN0dXJhLmRldGFsbGVzID8/IFtdOyAgLy8g4oaQIElNUE9SVEFOVEVcbiAgICB0aGlzLm1vZGFsT3BlbiA9IGZhbHNlO1xuICB9XG5cbiAgYnVzY2FyRmFjdHVyYVBvckNsYXZlKCkge1xuICAgIGlmICghdGhpcy5jbGF2ZUFjY2Vzby50cmltKCkpIHtcbiAgICAgIGFsZXJ0KFwiSW5ncmVzZSB1bmEgY2xhdmUgZGUgYWNjZXNvXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMubm90YUNyZWRpdG9TZXJ2aWNlLmJ1c2NhclBvckNsYXZlKHRoaXMuY2xhdmVBY2Nlc28pLnN1YnNjcmliZSh7XG4gICAgICBuZXh0OiAoZmFjdHVyYSkgPT4ge1xuICAgICAgICBpZiAoIWZhY3R1cmEpIHtcbiAgICAgICAgICBhbGVydChcIk5vIGV4aXN0ZSBmYWN0dXJhIGNvbiBlc2EgY2xhdmUgZGUgYWNjZXNvXCIpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZmFjdHVyYVNlbGVjY2lvbmFkYSA9IGZhY3R1cmE7XG4gICAgICAgIHRoaXMuZGV0YWxsZXMgPSBmYWN0dXJhLmRldGFsbGVzID8/IFtdOyAgLy8g4oaQIElNUE9SVEFOVEVcbiAgICAgICAgdGhpcy5tb2RhbE9wZW4gPSBmYWxzZTtcbiAgICAgIH0sXG4gICAgICBlcnJvcjogKGVycikgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgIGFsZXJ0KFwiRXJyb3IgYnVzY2FuZG8gcG9yIGNsYXZlIGRlIGFjY2Vzb1wiKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG5ndWFyZGFyTm90YUNyZWRpdG8oKSB7XG5cbiAgaWYgKCF0aGlzLmZhY3R1cmFTZWxlY2Npb25hZGEpIHtcbiAgICBhbGVydChcIkRlYmUgc2VsZWNjaW9uYXIgdW5hIGZhY3R1cmEuXCIpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmICghdGhpcy50aXBvKSB7XG4gICAgYWxlcnQoXCJEZWJlIHNlbGVjY2lvbmFyIGVsIHRpcG8gZGUgbm90YSBkZSBjcsOpZGl0by5cIik7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKCF0aGlzLnJhem9uLnRyaW0oKSkge1xuICAgIGFsZXJ0KFwiRGViZSBlc2NyaWJpciB1biBtb3Rpdm8uXCIpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IHBheWxvYWQgPSB7XG4gICAgZmFjdHVyYUlkOiB0aGlzLmZhY3R1cmFTZWxlY2Npb25hZGEuaWQsXG4gICAgdGlwbzogdGhpcy50aXBvLFxuICAgIG1vdGl2bzogdGhpcy5yYXpvbixcbiAgICBkZXRhbGxlczogdGhpcy50aXBvID09PSAnREVWT0xVQ0lPTl9QUk9EVUNUT1MnXG4gICAgICA/IHRoaXMuZGV0YWxsZXNcbiAgICAgIDogW11cbiAgfTtcblxuICB0aGlzLm5vdGFDcmVkaXRvU2VydmljZS5jcmVhdGVOb3RhQ3JlZGl0byhwYXlsb2FkKS5zdWJzY3JpYmUoe1xuICAgIG5leHQ6IChyZXMpID0+IHtcbiAgICAgIGFsZXJ0KFwiTm90YSBkZSBjcsOpZGl0byBjcmVhZGEgY29ycmVjdGFtZW50ZS5cIik7XG4gICAgICBjb25zb2xlLmxvZyhyZXMpO1xuXG4gICAgICB0aGlzLmZhY3R1cmFTZWxlY2Npb25hZGEgPSBudWxsO1xuICAgICAgdGhpcy50aXBvID0gXCJcIjtcbiAgICAgIHRoaXMucmF6b24gPSBcIlwiO1xuICAgICAgdGhpcy5kZXRhbGxlcyA9IFtdO1xuICAgICAgdGhpcy5jbGF2ZUFjY2VzbyA9IFwiXCI7XG4gICAgfSxcbiAgICBlcnJvcjogKGVycikgPT4ge1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgYWxlcnQoZXJyLmVycm9yPy5tZXNzYWdlIHx8IFwiRXJyb3IgYWwgY3JlYXIgbm90YSBkZSBjcsOpZGl0b1wiKTtcbiAgICB9XG4gIH0pO1xuXG59XG5cblxufVxuIiwiPGRpdiBjbGFzcz1cInAtOCBtYXgtdy0zeGwgbXgtYXV0b1wiPlxuXG4gIDxoMSBjbGFzcz1cInRleHQtM3hsIGZvbnQtYm9sZCBtYi02XCI+TnVldmEgTm90YSBkZSBDcsOpZGl0bzwvaDE+XG5cbiAgPCEtLSBCb3TDs24gYWJyaXIgbW9kYWwgLS0+XG4gIDxidXR0b25cbiAgICAoY2xpY2spPVwiYWJyaXJNb2RhbCgpXCJcbiAgICBjbGFzcz1cInB4LTQgcHktMiBiZy1ncmVlbi02MDAgdGV4dC13aGl0ZSByb3VuZGVkIGhvdmVyOmJnLWdyZWVuLTcwMFwiXG4gID5cbiAgICBTZWxlY2Npb25hciBGYWN0dXJhXG4gIDwvYnV0dG9uPlxuXG4gIDwhLS0gRmFjdHVyYSBzZWxlY2Npb25hZGEgLS0+XG4gIDxkaXYgKm5nSWY9XCJmYWN0dXJhU2VsZWNjaW9uYWRhXCIgY2xhc3M9XCJtdC02IGJvcmRlciBwLTQgcm91bmRlZCBiZy1ncmF5LTUwXCI+XG4gICAgPHA+PHN0cm9uZz5GYWN0dXJhOjwvc3Ryb25nPiB7eyBmYWN0dXJhU2VsZWNjaW9uYWRhLnNlY3VlbmNpYWwgfX08L3A+XG4gICAgPHA+PHN0cm9uZz5DbGllbnRlOjwvc3Ryb25nPiB7eyBmYWN0dXJhU2VsZWNjaW9uYWRhLmNsaWVudGU/Lm5vbWJyZSB9fTwvcD5cbiAgICA8cD48c3Ryb25nPlRvdGFsOjwvc3Ryb25nPiAke3sgZmFjdHVyYVNlbGVjY2lvbmFkYS50b3RhbEZhY3R1cmEgfX08L3A+XG4gIDwvZGl2PlxuXG48IS0tIFRpcG8gZGUgTm90YSBkZSBDcsOpZGl0byAtLT5cbjxkaXYgY2xhc3M9XCJtdC02XCI+XG4gIDxsYWJlbCBjbGFzcz1cImJsb2NrIGZvbnQtYm9sZCBtYi0yXCI+VGlwbyBkZSBOb3RhIGRlIENyw6lkaXRvPC9sYWJlbD5cblxuICA8c2VsZWN0IFsobmdNb2RlbCldPVwidGlwb1wiIGNsYXNzPVwiYm9yZGVyIHAtMiByb3VuZGVkIHctZnVsbFwiPlxuICAgIDxvcHRpb24gdmFsdWU9XCJcIj4tLSBTZWxlY2Npb25lIC0tPC9vcHRpb24+XG4gICAgPG9wdGlvbiB2YWx1ZT1cIkFOVUxBQ0lPTl9UT1RBTFwiPkFudWxhY2nDs24gVG90YWw8L29wdGlvbj5cbiAgICA8b3B0aW9uIHZhbHVlPVwiRkFDVFVSQV9EVVBMSUNBREFcIj5GYWN0dXJhIER1cGxpY2FkYTwvb3B0aW9uPlxuICAgIDxvcHRpb24gdmFsdWU9XCJDT1JSRUNDSU9OX0ZPUk1BX1BBR09cIj5Db3JyZWNjacOzbiBkZSBGb3JtYSBkZSBQYWdvPC9vcHRpb24+XG4gICAgPG9wdGlvbiB2YWx1ZT1cIkRFVk9MVUNJT05fUFJPRFVDVE9TXCI+RGV2b2x1Y2nDs24gZGUgUHJvZHVjdG9zPC9vcHRpb24+XG4gIDwvc2VsZWN0PlxuPC9kaXY+XG5cblxuXG4gIDwhLS0gVGV4dEFyZWEgUmF6w7NuIC0tPlxuICA8ZGl2IGNsYXNzPVwibXQtNlwiPlxuICAgIDxsYWJlbCBjbGFzcz1cImJsb2NrIGZvbnQtYm9sZCBtYi0yXCI+TW90aXZvIC8gUmF6w7NuPC9sYWJlbD5cbiAgICA8dGV4dGFyZWFcbiAgICAgIFsobmdNb2RlbCldPVwicmF6b25cIlxuICAgICAgcm93cz1cIjNcIlxuICAgICAgcGxhY2Vob2xkZXI9XCJFc2NyaWJhIGxhIHJhesOzbiBkZSBsYSBub3RhIGRlIGNyw6lkaXRvXCJcbiAgICAgIGNsYXNzPVwidy1mdWxsIGJvcmRlciBwLTMgcm91bmRlZFwiXG4gICAgPjwvdGV4dGFyZWE+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiZmxleCBnYXAtMiBtYi00XCI+XG4gIDxpbnB1dCB0eXBlPVwidGV4dFwiXG4gICAgICAgICBbKG5nTW9kZWwpXT1cImNsYXZlQWNjZXNvXCJcbiAgICAgICAgIHBsYWNlaG9sZGVyPVwiQnVzY2FyIHBvciBjbGF2ZSBkZSBhY2Nlc29cIlxuICAgICAgICAgY2xhc3M9XCJib3JkZXIgcC0yIHJvdW5kZWQgdy04MFwiPlxuXG4gIDxidXR0b24gKGNsaWNrKT1cImJ1c2NhckZhY3R1cmFQb3JDbGF2ZSgpXCJcbiAgICAgICAgICBjbGFzcz1cImJnLWJsdWUtNjAwIHRleHQtd2hpdGUgcHgtNCBweS0yIHJvdW5kZWRcIj5cbiAgICBCdXNjYXJcbiAgPC9idXR0b24+XG48L2Rpdj5cblxuXG4gIDwhLS0gQm90w7NuIGd1YXJkYXIgLS0+XG4gIDxidXR0b25cbiAgICAoY2xpY2spPVwiZ3VhcmRhck5vdGFDcmVkaXRvKClcIlxuICAgIGNsYXNzPVwibXQtNiBweC02IHB5LTIgYmctYmx1ZS02MDAgdGV4dC13aGl0ZSByb3VuZGVkIGhvdmVyOmJnLWJsdWUtNzAwXCJcbiAgPlxuICAgIEd1YXJkYXIgTm90YSBkZSBDcsOpZGl0b1xuICA8L2J1dHRvbj5cbjwvZGl2PlxuXG48IS0tIE1PREFMIC0tPlxuPGRpdlxuICAqbmdJZj1cIm1vZGFsT3BlblwiXG4gIGNsYXNzPVwiZml4ZWQgaW5zZXQtMCBiZy1ibGFjayBiZy1vcGFjaXR5LTQwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCJcbj5cbiAgPGRpdiBjbGFzcz1cImJnLXdoaXRlIHctOTYgcm91bmRlZCBzaGFkb3cgcC02XCI+XG5cbiAgICA8aDIgY2xhc3M9XCJ0ZXh0LXhsIGZvbnQtYm9sZCBtYi00XCI+U2VsZWNjaW9uYXIgRmFjdHVyYTwvaDI+XG5cbiAgICA8aW5wdXRcbiAgICAgIFsobmdNb2RlbCldPVwiYnVzY2Fkb3JcIlxuICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgcGxhY2Vob2xkZXI9XCJCdXNjYXIgZmFjdHVyYS4uLlwiXG4gICAgICBjbGFzcz1cImJvcmRlciBwLTIgdy1mdWxsIHJvdW5kZWQgbWItNFwiXG4gICAgLz5cblxuICAgIDxkaXYgY2xhc3M9XCJtYXgtaC03MiBvdmVyZmxvdy15LWF1dG8gYm9yZGVyIHJvdW5kZWRcIj5cblxuICAgICAgPGRpdlxuICAgICAgICAqbmdGb3I9XCJsZXQgZiBvZiBmYWN0dXJhc0ZpbHRyYWRhcygpXCJcbiAgICAgICAgKGNsaWNrKT1cInNlbGVjY2lvbmFyRmFjdHVyYShmKVwiXG4gICAgICAgIGNsYXNzPVwicC0zIGN1cnNvci1wb2ludGVyIGhvdmVyOmJnLWdyYXktMTAwIGJvcmRlci1iXCJcbiAgICAgID5cbiAgICAgICAgPHAgY2xhc3M9XCJmb250LXNlbWlib2xkXCI+e3sgZi5zZWN1ZW5jaWFsIH19PC9wPlxuICAgICAgICA8cCBjbGFzcz1cInRleHQtc20gdGV4dC1ncmF5LTYwMFwiPiR7eyBmLnRvdGFsRmFjdHVyYSB9fTwvcD5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8cFxuICAgICAgICAqbmdJZj1cImZhY3R1cmFzRmlsdHJhZGFzKCkubGVuZ3RoID09PSAwXCJcbiAgICAgICAgY2xhc3M9XCJ0ZXh0LWNlbnRlciB0ZXh0LWdyYXktNTAwIHAtM1wiXG4gICAgICA+XG4gICAgICAgIE5vIGhheSByZXN1bHRhZG9zXG4gICAgICA8L3A+XG5cbiAgICA8L2Rpdj5cblxuICAgIDxidXR0b25cbiAgICAgIGNsYXNzPVwibXQtNCBweC00IHB5LTIgYmctcmVkLTYwMCB0ZXh0LXdoaXRlIHJvdW5kZWRcIlxuICAgICAgKGNsaWNrKT1cImNlcnJhck1vZGFsKClcIlxuICAgID5cbiAgICAgIENlcnJhclxuICAgIDwvYnV0dG9uPlxuXG4gIDwvZGl2PlxuPC9kaXY+XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgRmFjdHVyYSB9IGZyb20gJy4vLi4vZmFjdHVyYS9mYWN0dXJhLm1vZGVsJztcbmltcG9ydCB7IGVudmlyb25tZW50IH0gZnJvbSAnLi4vLi4vZW52aXJvbm1lbnRzL2Vudmlyb25tZW50JztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTm90YUNyZWRpdG9TZXJ2aWNlIHtcbiAgcHJpdmF0ZSBBUEl1cmwgPSBgJHtlbnZpcm9ubWVudC5hcGlVcmxlfS9gO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkge31cblxuICBnZXROb3Rhc0NyZWRpdG8oKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLkFQSXVybCk7XG4gIH1cblxuICBjcmVhdGVOb3RhQ3JlZGl0byhkYXRhOiBhbnkpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChgJHt0aGlzLkFQSXVybH1ub3RhLWNyZWRpdG8vZ2VuZXJhbGAsIGRhdGEpO1xuICB9XG5cbiAgb2J0ZW5lckZhY3R1cmFzKCk6IE9ic2VydmFibGU8RmFjdHVyYVtdPiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8RmFjdHVyYVtdPihgJHt0aGlzLkFQSXVybH1mYWN0dXJhcy9gKTtcbiAgfVxuXG4gIHJlcG9ydGVQZGYoaWQ6IG51bWJlcik6IE9ic2VydmFibGU8QmxvYj4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke3RoaXMuQVBJdXJsfSR7aWR9L3JlcG9ydGVgLCB7XG4gICAgICByZXNwb25zZVR5cGU6ICdibG9iJ1xuICAgIH0pO1xuICB9XG4gICAgYnVzY2FyUG9yQ2xhdmUoY2xhdmU6IHN0cmluZyk6IE9ic2VydmFibGU8RmFjdHVyYT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PEZhY3R1cmE+KGAke3RoaXMuQVBJdXJsfW5vdGEtY3JlZGl0by9mYWN0dXJhLyR7Y2xhdmV9YCk7XG4gICAgfVxuXG5cblxufVxuIiwiaW1wb3J0IHsgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgTG9naW5Db21wb25lbnQgfSBmcm9tICcuL2F1dGgvbG9naW4vbG9naW4nO1xyXG5pbXBvcnQgeyBEYXNoYm9hcmRDb21wb25lbnQgfSBmcm9tICcuL2xheW91dC9kYXNoYm9hcmQnO1xyXG5pbXBvcnQgeyBhdXRoR3VhcmQgfSBmcm9tICcuLi9hcHAvZ3VhcmRzL2F1dGgtZ3VhcmQnO1xyXG5pbXBvcnQgeyBOb3RGb3VuZENvbXBvbmVudCB9IGZyb20gJy4uL2FwcC9wYWdlcy9ub3QtZm91bmQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTGlzdGFyRW1wcmVzYUNvbXBvbmVudCB9IGZyb20gJy4vZW1wcmVzYS9saXN0YS1lbXByZXNhJztcclxuaW1wb3J0IHsgTm90YUNyZWRpdG9Db21wb25lbnQgfSBmcm9tICcuL25vdGFjcmVkaXRvL25vdGFjcmVkaXRvJztcclxuXHJcbmV4cG9ydCBjb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcclxuICB7IHBhdGg6ICcnLCByZWRpcmVjdFRvOiAnbG9naW4nLCBwYXRoTWF0Y2g6ICdmdWxsJyB9LFxyXG4gIHsgcGF0aDogJ2xvZ2luJywgY29tcG9uZW50OiBMb2dpbkNvbXBvbmVudCB9LFxyXG4gIHtcclxuICAgIHBhdGg6ICdkYXNoYm9hcmQnLFxyXG4gICAgY29tcG9uZW50OiBEYXNoYm9hcmRDb21wb25lbnQsXHJcbiAgICBjYW5BY3RpdmF0ZTogW2F1dGhHdWFyZF0sICAvLyBGdW5jacOzbiBndWFyZFxyXG4gICAgY2hpbGRyZW46IFtcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICdhZG1pbicsXHJcbiAgICAgICAgbG9hZENvbXBvbmVudDogKCkgPT5cclxuICAgICAgICAgIGltcG9ydCgnLi9wYWdlcy9hZG1pbicpLnRoZW4obSA9PiBtLkFkbWluQ29tcG9uZW50KSxcclxuICAgICAgICBcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICd2ZW50YXMnLFxyXG4gICAgICAgIGxvYWRDb21wb25lbnQ6ICgpID0+XHJcbiAgICAgICAgICBpbXBvcnQoJy4vcGFnZXMvdmVudGFzJykudGhlbihtID0+IG0uVmVudGFzQ29tcG9uZW50KSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICdjYWphJyxcclxuICAgICAgICBsb2FkQ29tcG9uZW50OiAoKSA9PlxyXG4gICAgICAgICAgaW1wb3J0KCcuL3BhZ2VzL2NhamEnKS50aGVuKG0gPT4gbS5DYWphQ29tcG9uZW50KSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICdlbXByZXNhJywgLy8g4pyFIE1vdmVyIGFxdcOtXHJcbiAgICAgICAgY29tcG9uZW50OiBMaXN0YXJFbXByZXNhQ29tcG9uZW50LFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJ2xpc3RhLWVtcHJlc2EnLFxyXG4gICAgICAgIGxvYWRDb21wb25lbnQ6ICgpID0+IFxyXG4gICAgICAgICAgaW1wb3J0KCcuL2VtcHJlc2EvbGlzdGEtZW1wcmVzYScpLnRoZW4obSA9PiBtLkxpc3RhckVtcHJlc2FDb21wb25lbnQpLFxyXG4gICAgICB9LFxyXG4gICAgICAgLy8gUnV0YXMgcGFyYSBDbGllbnRlc1xyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJ2NsaWVudGVzJyxcclxuICAgICAgICBsb2FkQ29tcG9uZW50OiAoKSA9PlxyXG4gICAgICAgICAgaW1wb3J0KCcuL2NsaWVudGUvbGlzdGEtY2xpZW50ZXMnKS50aGVuKG0gPT4gbS5MaXN0YUNsaWVudGVzQ29tcG9uZW50KSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICdjbGllbnRlcy9jcmVhcicsXHJcbiAgICAgICAgbG9hZENvbXBvbmVudDogKCkgPT5cclxuICAgICAgICAgIGltcG9ydCgnLi9jbGllbnRlL2NyZWFyLWNsaWVudGUnKS50aGVuKG0gPT4gbS5DbGllbnRlRm9ybUNvbXBvbmVudCksXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiAnY2xpZW50ZXMvZWRpdGFyLzppZCcsXHJcbiAgICAgICAgbG9hZENvbXBvbmVudDogKCkgPT5cclxuICAgICAgICAgIGltcG9ydCgnLi9jbGllbnRlL2NyZWFyLWNsaWVudGUnKS50aGVuKG0gPT4gbS5DbGllbnRlRm9ybUNvbXBvbmVudCksXHJcbiAgICAgIH0sXHJcbiAgICAgIC8vIFJ1dGFzIHBhcmEgcHJvZHVjdG9zXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiAncHJvZHVjdG9zJyxcclxuICAgICAgICBsb2FkQ29tcG9uZW50OiAoKSA9PlxyXG4gICAgICAgICAgaW1wb3J0KCcuL3Byb2R1Y3RvL2xpc3Rhci1wcm9kdWN0b3MnKS50aGVuKG0gPT4gbS5Qcm9kdWN0b0xpc3RDb21wb25lbnQpLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJ3Byb2R1Y3Rvcy9jcmVhcicsXHJcbiAgICAgICAgbG9hZENvbXBvbmVudDogKCkgPT5cclxuICAgICAgICAgIGltcG9ydCgnLi9wcm9kdWN0by9jcmVhci1wcm9kdWN0bycpLnRoZW4obSA9PiBtLkNyZWFyUHJvZHVjdG9Db21wb25lbnQpLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJ3Byb2R1Y3Rvcy9lZGl0YXIvOmlkJyxcclxuICAgICAgICBsb2FkQ29tcG9uZW50OiAoKSA9PlxyXG4gICAgICAgICAgaW1wb3J0KCcuL3Byb2R1Y3RvL2VkaXRhci1wcm9kdWN0bycpLnRoZW4obSA9PiBtLkVkaXRhclByb2R1Y3RvQ29tcG9uZW50KSxcclxuICAgICAgfSxcclxuICAgICAgLy8gcnV0YXMgcGFyYSBmYWN0dXJhc1xyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJ2ZhY3R1cmFzJyxcclxuICAgICAgICBsb2FkQ29tcG9uZW50OiAoKSA9PlxyXG4gICAgICAgICAgaW1wb3J0KCcuL2ZhY3R1cmEvbGlzdGFyLWZhY3R1cmFzJykudGhlbihtID0+IG0uTGlzdGFyRmFjdHVyYXNDb21wb25lbnQpLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJ2ZhY3R1cmFzL2NyZWFyJyxcclxuICAgICAgICBsb2FkQ29tcG9uZW50OiAoKSA9PlxyXG4gICAgICAgICAgaW1wb3J0KCcuL2ZhY3R1cmEvZmFjdHVyYScpLnRoZW4obSA9PiBtLkZhY3R1cmFDb21wb25lbnQpLFxyXG4gICAgICB9LFxyXG4gICAgICAvLyBydXRhcyBwYXJhIGNvdGl6YWNpb25lc1xyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJ2NvdGl6YWNpb25lcycsXHJcbiAgICAgICAgbG9hZENvbXBvbmVudDogKCkgPT5cclxuICAgICAgICAgIGltcG9ydCgnLi9jb3RpemFjaW9uL2xpc3Rhci1jb3RpemFjaW9uZXMnKS50aGVuKG0gPT4gbS5MaXN0YXJDb3RpemFjaW9uZXNDb21wb25lbnQpLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJ2NvdGl6YWNpb25lcy9jcmVhcicsXHJcbiAgICAgICAgbG9hZENvbXBvbmVudDogKCkgPT5cclxuICAgICAgICAgIGltcG9ydCgnLi9jb3RpemFjaW9uL2NvdGl6YWNpb24nKS50aGVuKG0gPT4gbS5Db3RpemFjaW9uQ29tcG9uZW50KSxcclxuICAgICAgfSxcclxuICAgICAgLy8gcnV0YXMgcGFyYSB1c3Vhcmlvc1xyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJ3VzdWFyaW9zJyxcclxuICAgICAgICBsb2FkQ29tcG9uZW50OiAoKSA9PlxyXG4gICAgICAgICAgaW1wb3J0KCcuL3VzdWFyaW8vdXN1YXJpbycpLnRoZW4obSA9PiBtLlVzdWFyaW9zQ29tcG9uZW50KSxcclxuICAgICAgfSxcclxuICAgICAgLy8gcnV0YXMgcGFyYSBjYWphc1xyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJ2NhamFzJyxcclxuICAgICAgICBsb2FkQ29tcG9uZW50OiAoKSA9PlxyXG4gICAgICAgICAgaW1wb3J0KCcuL2NhamEvY2FqYScpLnRoZW4obSA9PiBtLkNhamFDb21wb25lbnQpLFxyXG4gICAgICB9LFxyXG4gICAgICAvLyBydXRhcyBwYXJhIHJlcG9ydGVzIFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJ3JlcG9ydGVzL3ZlbnRhcycsXHJcbiAgICAgICAgbG9hZENvbXBvbmVudDogKCkgPT5cclxuICAgICAgICAgIGltcG9ydCgnLi9yZXBvcnRlcy9yZXBvcnRlLXVzdWFyaW9zJykudGhlbihtID0+IG0uUmVwb3J0ZVVzdWFyaW9zQ29tcG9uZW50KSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICBwYXRoOiAncmVwb3J0ZXMvbWVuc3VhbGVzJyxcclxuICAgICAgICBsb2FkQ29tcG9uZW50OiAoKSA9PlxyXG4gICAgICAgICAgaW1wb3J0KCcuL3JlcG9ydGVzL3JlcG9ydGUtZ3JhZmljbycpLnRoZW4obSA9PiBtLlJlcG9ydGVWZW50YXNHcmFmaWNvQ29tcG9uZW50KSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICdub3RhLWNyZWRpdG8nLFxyXG4gICAgICAgIGNvbXBvbmVudDogTm90YUNyZWRpdG9Db21wb25lbnRcclxuICAgICAgfSxcclxuXHJcblxyXG4gICAgXSxcclxuICB9LFxyXG4gIHsgcGF0aDogJyoqJywgY29tcG9uZW50OiBOb3RGb3VuZENvbXBvbmVudCB9LCAvLyBSdXRhIGNhdGNoLWFsbCBwYXJhIDQwNFxyXG5dO1xyXG5cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBzaWduYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyT3V0bGV0IH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgSWRsZVNlcnZpY2UgfSBmcm9tICcuL2lkbGUuc2VydmljZXMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtcm9vdCcsXHJcbiAgaW1wb3J0czogW1JvdXRlck91dGxldF0sXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2FwcC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9hcHAuc2NzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwIHtcclxuICBwcm90ZWN0ZWQgcmVhZG9ubHkgdGl0bGUgPSBzaWduYWwoJ3Bvcy1zcmktYW5ndWxhcicpO1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBpZGxlU2VydmljZTogSWRsZVNlcnZpY2UpIHtcclxuICAgIC8vIHNvbG8gaW5pY2lhbGl6YSBlbCBzZXJ2aWNpb1xyXG4gIH1cclxufVxyXG4iLCI8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XHJcbiIsIi8vIHNyYy9hcHAvaWRsZS5zZXJ2aWNlLnRzXHJcbmltcG9ydCB7IEluamVjdGFibGUsIE5nWm9uZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4vYXV0aC9hdXRoLnNlcnZpY2UnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290JyxcclxuICBcclxufSlcclxuZXhwb3J0IGNsYXNzIElkbGVTZXJ2aWNlIHtcclxuICBwcml2YXRlIHRpbWVvdXQ6IGFueTtcclxuICBwcml2YXRlIHJlYWRvbmx5IHRpbWVvdXRNcyA9IDEwICogNjAgKiAxMDAwOyAvLyAxMCBtaW51dG9zXHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsIHByaXZhdGUgYXV0aHNlcnZpY2U6IEF1dGhTZXJ2aWNlKSB7XHJcbiAgICB0aGlzLmluaXRMaXN0ZW5lcnMoKTtcclxuICAgIHRoaXMucmVzZXRUaW1lcigpO1xyXG4gIH1cclxuXHJcbiAgaW5pdExpc3RlbmVycygpIHtcclxuICAgIFsnY2xpY2snLCAnbW91c2Vtb3ZlJywgJ2tleWRvd24nLCAnc2Nyb2xsJ10uZm9yRWFjaChldmVudCA9PiB7XHJcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCAoKSA9PiB0aGlzLnJlc2V0VGltZXIoKSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJlc2V0VGltZXIoKSB7XHJcbiAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0KTtcclxuICAgIHRoaXMudGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLmF1dGhzZXJ2aWNlLmxvZ291dCgpOyAvLyBBY2Npw7NuIGFsIGVzdGFyIGluYWN0aXZvXHJcbiAgICB9LCB0aGlzLnRpbWVvdXRNcyk7XHJcbiAgfVxyXG5cclxuXHJcbn1cclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsU0FBUyw0QkFBNEI7OztBQ0FyQyxTQUE0QixXQUFXLG9DQUFvQyxrQ0FBa0M7QUFDN0csU0FBUyxxQkFBcUI7QUFDOUIsU0FBUyxtQkFBbUIsOEJBQStCO0FBQzNELFNBQVMsZ0NBQWdDO0FBQ3pDLFNBQVMseUJBQXlCOzs7QUNKbEMsU0FBUyxrQkFBa0I7O0FBVXJCLElB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QSx1QkFBQSxVQUFBLEdBQUEsdUJBQUEsV0FBQSxDQUFBO0VBQUE7Z0ZBQVgsY0FBVyxTQUFYLGFBQVcsV0FBQSxZQUhWLE9BQU0sQ0FBQTs7O2dGQUdQLGFBQVcsQ0FBQTtVQUp2QkM7V0FBVztNQUNWLFlBQVk7S0FFYjs7Ozs7QUZFSyxJQUFPLE1BQVAsTUFBTyxLQUFHO0VBRVE7RUFESCxRQUFRLE9BQU8sbUJBQWlCLEdBQUEsWUFBQSxDQUFBLEVBQUEsV0FBQSxRQUFBLENBQUEsSUFBQSxDQUFBLENBQUE7RUFDakQsWUFBb0IsYUFBd0I7QUFBeEIsU0FBQSxjQUFBO0VBRXRCOztxQ0FKVyxNQUFHLGdDQUFBLFdBQUEsQ0FBQTtFQUFBOzZFQUFILE1BQUcsV0FBQSxDQUFBLENBQUEsVUFBQSxDQUFBLEdBQUEsT0FBQSxHQUFBLE1BQUEsR0FBQSxVQUFBLFNBQUEsYUFBQSxJQUFBLEtBQUE7QUFBQSxRQUFBLEtBQUEsR0FBQTtBQ1ZoQixNQUFBLHdCQUFBLEdBQUEsZUFBQTs7b0JETVlDLGFBQVksR0FBQSxlQUFBLEVBQUEsQ0FBQTs7O2dGQUlYLEtBQUcsQ0FBQTtVQU5mQzt1QkFDVyxZQUFVLFNBQ1gsQ0FBQ0QsYUFBWSxHQUFDLFVBQUEsc0NBQUEsQ0FBQTs7OztpRkFJWixLQUFHLEVBQUEsV0FBQSxPQUFBLFVBQUEsa0JBQUEsWUFBQSxHQUFBLENBQUE7QUFBQSxHQUFBOzs7Ozs7OytEQUFILEtBQUcsRUFBQSxTQUFBLENBQUFFLEtBQUEscUJBQUEsR0FBQSxDQUFBRixlQUFBQyxVQUFBLEdBQUEsYUFBQSxFQUFBLENBQUE7RUFBQTtBQUFBLEdBQUEsT0FBQSxjQUFBLGVBQUEsY0FBQSxZQUFBLEtBQUEsSUFBQSxDQUFBO0FBQUEsR0FBQSxPQUFBLGNBQUEsZUFBQSxlQUFBLFlBQUEsT0FBQSxZQUFBLElBQUEsR0FBQSw0QkFBQSxPQUFBLEVBQUEsT0FBQSxNQUFBLFlBQUEsRUFBQSxTQUFBLENBQUE7QUFBQSxHQUFBOzs7QWJQaEIsU0FBUywwQkFBMEI7QUFDbkMsT0FBTyxjQUFjO0FBRXJCLG1CQUFtQixRQUFRO0FBRTNCLHFCQUFxQixLQUFLLFNBQVMsRUFDaEMsTUFBTSxDQUFDLFFBQVEsUUFBUSxNQUFNLEdBQUcsQ0FBQzsiLCJuYW1lcyI6WyJpMCIsIkNvbW1vbk1vZHVsZSIsIkNvbXBvbmVudCIsIkNvbW1vbk1vZHVsZSIsIkNvbXBvbmVudCIsImkwIiwiaTMiLCJSb3V0ZXIiLCJSb3V0ZXIiLCJDb21wb25lbnQiLCJpMCIsIkNvbXBvbmVudCIsIkNvbW1vbk1vZHVsZSIsIkluamVjdGFibGUiLCJJbmplY3RhYmxlIiwiQ29tbW9uTW9kdWxlIiwiQ29tcG9uZW50IiwiaTAiLCJpMiIsImkzIiwiQ29tcG9uZW50IiwiUm91dGVyT3V0bGV0IiwiSW5qZWN0YWJsZSIsIkluamVjdGFibGUiLCJSb3V0ZXJPdXRsZXQiLCJDb21wb25lbnQiLCJpMCJdfQ==