# Phase 7 React Native Mastery

**Course:** Frontend Mastery  
**Phase:** 7  
**Estimated duration:** 4–6 weeks  
**Environment:** Fedora Linux + iPhone  
**Workspace:** `~/frontend-mastery/phase-07-react-native`  
**Technology:** React Native, Expo, Expo Router, React Navigation concepts, TypeScript  
**Backend:** Existing Django + Django REST Framework  
**Learning approach:** Understand → Reason → Implement → Verify → Troubleshoot

---

# 1. Course objective

The goal of this phase is to become capable of designing, developing, testing, and shipping real cross-platform mobile applications using React Native.

By the end of this phase, the learner should be able to:

- Explain how React Native applications work.
- Understand the relationship between React Native, Expo, and native iOS/Android capabilities.
- Build mobile applications with proper navigation.
- Design interfaces that respect mobile platform conventions.
- Access device features through native APIs.
- Connect a mobile application to a Django REST Framework backend.
- Reuse suitable application logic across web and mobile.
- Implement appropriate offline-first functionality.
- Identify and improve common mobile performance problems.
- Build and distribute applications for iOS and Android testing.

# 2. Architecture and technology decisions

## Mobile application

- React Native.
- Expo with Continuous Native Generation (CNG).
- Expo Router for file-based navigation.
- React Navigation concepts and underlying navigation behaviour.
- TypeScript.
- Expo development tools.

## Backend

Reuse the existing Django + Django REST Framework backend.

The mobile application will communicate with the backend through HTTP APIs.

The mobile application and backend remain separate applications.

## Testing devices

- iPhone: primary physical-device testing.
- Android: emulator or physical device when available.
- Expo Go during initial learning.
- Development builds when native functionality requires them.

## Project decision

Build a new mobile-first application.

The exact application idea will be selected during the project-planning stage. Do not choose an arbitrary application before understanding the requirements.

# 3. Module roadmap

---

# Module 1 React Native and Expo Foundations

**Goal:** Understand the React Native environment and how an Expo application works.

### Lessons

1. What React Native is and what problem it solves.
2. React Native versus React for the web.
3. How React Native renders native interfaces.
4. JavaScript application code versus native platform code.
5. Expo architecture and its responsibilities.
6. Expo Go, development builds, and production builds.
7. Expo managed configuration and Continuous Native Generation.
8. Expo configuration and project structure.
9. Understanding the application entry point.
10. Running and debugging the application on a physical device.

### Practical work

- Understand the existing Expo project.
- Run the application on the iPhone.
- Modify a basic screen.
- Observe how a code change reaches the device.
- Understand the development server and device connection.

### Exit criteria

The learner can:

- Explain the relationship between React Native and Expo.
- Explain how an Expo application runs.
- Distinguish Expo Go from a development build.
- Explain the purpose of CNG.
- Independently start and test the application.

---

# Module 2 Mobile Navigation and Application Structure

**Goal:** Understand and implement proper mobile navigation using React Navigation concepts through Expo Router.

### Lessons

1. Navigation architecture in mobile applications.
2. Screens, routes, and navigators.
3. React Navigation and Expo Router relationship.
4. File-based routing with Expo Router.
5. Stack navigation.
6. Bottom-tab navigation.
7. Combining stack and tab navigators.
8. Navigation actions and route transitions.
9. Passing parameters between screens.
10. Reading route parameters.
11. Nested navigation and layout organization.
12. Back navigation and navigation history.
13. Deep linking fundamentals.

### Practical work

Build a small navigation structure containing:

- Home screen.
- Profile screen.
- Details screen.
- Main tab navigation.
- Stack navigation for deeper screens.
- Route parameters passed between screens.

### Exit criteria

The learner can:

- Explain how a navigator manages navigation state.
- Distinguish stack navigation from tab navigation.
- Implement navigation between screens.
- Pass and retrieve route parameters.
- Organize nested navigation.
- Explain how Expo Router uses React Navigation concepts.

---

# Module 3 Platform Differences: iOS and Android

**Goal:** Understand how the same React Native application behaves across different mobile operating systems.

### Lessons

1. iOS and Android platform differences.
2. Platform-specific interface conventions.
3. Platform API and capability differences.
4. Platform detection.
5. Platform-specific component files.
6. Safe areas and system interface boundaries.
7. Status bar and navigation bar behaviour.
8. Keyboard behaviour on iOS and Android.
9. Platform-specific permissions.
10. Testing and debugging platform-specific issues.

### Practical work

- Run the same application on available platforms.
- Identify differences in layout and interaction.
- Handle one platform-specific behaviour.
- Implement a platform-specific adjustment where necessary.

### Exit criteria

The learner can:

- Explain why a mobile interface may behave differently across platforms.
- Detect the current platform.
- Organize platform-specific implementation.
- Handle basic platform-specific UI differences.
- Test the application across available platforms.

---

# Module 4 Native UI and Interaction Patterns

**Goal:** Build mobile interfaces using React Native components and mobile-first layout principles.

### Lessons

1. React Native core components.
2. View and Text.
3. Image and image handling.
4. ScrollView and FlatList.
5. Pressable and touch interactions.
6. TextInput and controlled input.
7. React Native styling.
8. Flexbox on mobile.
9. Dimensions and responsive layouts.
10. Safe-area-aware layouts.
11. Keyboard-aware forms.
12. Loading, empty, and error states.
13. Reusable mobile components.
14. Form and input validation.
15. Accessibility fundamentals.

### Practical work

Build a polished mobile interface containing:

- Reusable components.
- A form.
- A scrollable list.
- Interactive controls.
- Loading and error states.
- Responsive layouts.

### Exit criteria

The learner can:

- Build screens using React Native components.
- Style interfaces using React Native styling.
- Handle touch interactions.
- Build mobile forms and lists.
- Design interfaces that work across different screen sizes.
- Apply basic mobile accessibility principles.

---

# Module 5 Accessing Device APIs

**Goal:** Understand how mobile applications access hardware and operating-system capabilities.

### Lessons

1. What a device API is.
2. Native capabilities versus JavaScript application logic.
3. Expo modules and native API access.
4. Permissions and permission requests.
5. Camera and image selection.
6. Location services and location permissions.
7. Device information.
8. Notifications fundamentals.
9. Secure local storage.
10. Handling unavailable permissions and device capabilities.
11. Testing device APIs on a physical device.

### Practical work

Select device capabilities relevant to the chosen mobile application.

Implement at least two appropriate device API integrations.

Test permissions, successful access, and denied-access behaviour.

### Exit criteria

The learner can:

- Explain how JavaScript accesses native device functionality.
- Request and handle permissions.
- Integrate suitable device APIs.
- Handle unavailable functionality safely.
- Test device features on a physical device.

---

# Module 6 Backend Integration, Shared Logic and Offline Support

**Goal:** Connect the mobile application to the existing Django + DRF backend while designing appropriate reusable and offline-capable application logic.

### Lessons

1. Mobile applications and backend architecture.
2. HTTP communication from React Native.
3. API requests and responses.
4. API service organization.
5. Loading and error handling.
6. Authentication flow on mobile.
7. Secure credential and token storage.
8. Authenticated API requests.
9. Handling expired authentication.
10. Reusing business logic across web and mobile.
11. Separating platform-specific code from shared logic.
12. Mobile network conditions.
13. Local data persistence.
14. Offline-first architecture.
15. Cached data and application state.
16. Pending operations and synchronization fundamentals.
17. Handling failed requests and reconnection.
18. Data consistency between local storage and the backend.

### Practical work

Connect the mobile application to the existing Django + DRF backend.

Implement:

- Data retrieval.
- Data submission.
- Authentication where required.
- Error handling.
- Suitable local persistence.
- A meaningful offline-capable user experience.

Do not build unnecessary synchronization infrastructure. Implement the offline functionality required by the application.

### Exit criteria

The learner can:

- Connect a React Native application to Django REST Framework.
- Organize API communication.
- Implement mobile authentication safely.
- Identify reusable business logic.
- Explain local persistence and server-side data.
- Implement and verify appropriate offline-first behaviour.

---

# Module 7 Mobile Performance and Quality

**Goal:** Understand common mobile performance problems and improve application reliability and user experience.

### Lessons

1. React Native rendering fundamentals.
2. Component rendering and re-rendering.
3. State updates and rendering behaviour.
4. Lists and rendering performance.
5. FlatList optimization.
6. Image performance.
7. Avoiding unnecessary work during rendering.
8. Memoization and when it is useful.
9. Memory and resource considerations.
10. Network performance.
11. Measuring and profiling performance.
12. Debugging mobile application errors.
13. Mobile testing fundamentals.
14. Accessibility and usability review.

### Practical work

- Identify an actual performance issue.
- Measure or observe its impact.
- Apply an appropriate optimization.
- Verify the improvement.
- Test important application flows.

### Exit criteria

The learner can:

- Explain common causes of mobile performance problems.
- Identify unnecessary rendering work.
- Optimize appropriate lists and images.
- Use available debugging and profiling tools.
- Verify improvements rather than assuming they worked.

---

# Module 8 Production Builds, Testing and Release

**Goal:** Build and distribute the completed application for real-device testing.

### Lessons

1. Development builds versus production builds.
2. Expo Application Services (EAS).
3. EAS project configuration.
4. Application identifiers and metadata.
5. App icons and splash screens.
6. Environment-specific configuration.
7. Build profiles.
8. iOS build process.
9. Android build process.
10. Application signing fundamentals.
11. TestFlight distribution.
12. Android internal testing.
13. Build versioning.
14. Release troubleshooting.
15. Final application testing.
16. Project documentation and retrospective.

### Practical work

Use Expo EAS Build to produce application builds.

Distribution targets:

- iOS: TestFlight.
- Android: internal testing track.

Install and test the builds on real devices.

Record problems discovered during testing and resolve important release blockers.

### Exit criteria

The learner can:

- Explain the EAS build process.
- Produce an iOS build.
- Produce an Android build.
- Distribute the application for testing.
- Install and test the distributed application.
- Document the completed project and lessons learned.

---

# 4. Final capstone project

After the necessary foundations are covered, build one complete mobile-first application.

The application must:

- Have a clear purpose and target users.
- Use proper mobile navigation.
- Have a polished mobile interface.
- Use appropriate device capabilities.
- Connect to the existing Django + DRF backend.
- Implement authentication where necessary.
- Handle loading, errors, and network failures.
- Support appropriate offline functionality.
- Be tested on a physical iPhone.
- Be built for iOS and Android testing.

The application idea must be selected before implementation begins.

The capstone is not a replacement for understanding the modules. It applies the skills learned throughout the course.

# 5. Learning and teaching methodology

Every module follows this sequence:

**UNDERSTAND → REASON → IMPLEMENT → VERIFY → TROUBLESHOOT**

Teaching rules:

1. Explain the technical concept before introducing syntax.
2. Explain how the technology works internally at the appropriate level.
3. Explain why the concept matters.
4. Use a small practical example.
5. Consult official documentation for new APIs and tools.
6. Provide documentation links and short exact quotations when introducing important new APIs.
7. Let the learner write code and commands.
8. Review actual code and output.
9. Diagnose errors using evidence.
10. Use progressive hints when the learner is stuck.
11. Provide a complete explained solution after three genuine failed attempts when appropriate.
12. Avoid unnecessary inspections, repeated quizzes, and premature code dumps.

Do not treat a learner's "okay" or "next" as proof of mastery.

# 6. Module completion rules

A module is complete only when:

- Its planned lessons have been covered.
- Its practical work has been implemented.
- The important behaviour has been tested.
- Its exit criteria have been demonstrated.

Distinguish between:

- Planned.
- Explained.
- Implemented.
- Runtime-tested.
- Verified.
- Complete.

Do not mark work complete based on explanation alone.

# 7. Scope boundaries

This phase focuses on React Native mobile application development.

Do not expand into unrelated subjects such as:

- Native Android development with Kotlin.
- Native iOS development with Swift.
- Building a separate native application for each platform.
- Advanced native-module development unrelated to the application.
- Kubernetes or infrastructure orchestration.
- Rebuilding the Django backend without a genuine requirement.
- Unnecessary enterprise architecture.

Use Expo and the existing Django + DRF backend.

# 8. Learning progress

Update this section only when supported by actual learning and implementation evidence.

- [ ] Module 1 React Native and Expo Foundations
- [ ] Module 2 Mobile Navigation and Application Structure
- [ ] Module 3 Platform Differences
- [ ] Module 4 Native UI and Interaction Patterns
- [ ] Module 5 Accessing Device APIs
- [ ] Module 6 Backend Integration, Shared Logic and Offline Support
- [ ] Module 7 Mobile Performance and Quality
- [ ] Module 8 Production Builds, Testing and Release
- [ ] Final Capstone Application
- [ ] iOS TestFlight distribution
- [ ] Android internal testing
- [ ] Final retrospective

**Initial status:** The Expo project has been created and the iPhone connection through Expo Go was previously verified. The user has now run `npm run reset-project`. Earlier introductory explanations of Expo and navigation exist, but no module has yet met its complete practical exit criteria.

---

# 9. Final phase milestone

The phase is complete when the learner has:

1. Understood the eight modules.
2. Built a functional mobile-first application.
3. Connected it to Django + DRF.
4. Tested the application on a physical device.
5. Implemented appropriate offline behaviour.
6. Produced and distributed iOS and Android testing builds.
7. Completed a technical retrospective.

**Final outcome:** A working cross-platform mobile application that the learner understands, can maintain, and can confidently demonstrate.