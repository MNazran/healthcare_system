type RouteAccessProps = {
  [key: string]: string[];
};

export const routeAccess: RouteAccessProps = {
  '/admin(.*)': ['admin'],
  '/patient(.*)': ['patient', 'admin', 'doctor', 'nurse'],
  '/doctor(.*)': ['doctor'],
  '/staff(.*)': ['nurse', 'lab technician', 'cashier'],
  '/record/users': ['admin'],
  '/record/doctors': ['admin'],
  '/record/doctors(.*)': ['admin', 'doctor'],
  '/record/staffs': ['admin', 'doctor'],
  '/record/patients': ['admin', 'doctor', 'nurse'],
  '/patients/registrations': ['patient'],
};

// export const routeMatchers = {
//   admin: createRouteMatcher([
//     '/admin(.*)',
//     '/patient(.*)',
//     '/record/users',
//     '/record/doctors(.*)',
//     '/record/patients',
//     '/record/doctors',
//     '/record/staffs',
//   ]),
//   patient: createRouteMatcher(['/patient(.*)', '/patient/registrations']),

//   doctor: createRouteMatcher([
//     '/doctor(.*)',
//     '/record/doctors(.*)',
//     '/record/patients',
//     '/patient(.*)',
//     '/record/staffs',
//     '/record/patients',
//   ]),
// };
