import { openDB } from "idb";

export function openApplicationsDB() {
  return openDB("JobTrackerDB", 3, {
    upgrade(db) {
      if (!db.objectStoreNames.contains("applications")) {
        db.createObjectStore("applications", {
          keyPath: "id",
        });
      }

      if (!db.objectStoreNames.contains("applicationPages")) {
        db.createObjectStore("applicationPages", {
          keyPath: "cacheKey",
        });
      }
    },
  });
}


export async function saveApplications(applications) {
  const db = await openApplicationsDB();

  for (const application of applications) {
    await db.put("applications", application);
  }
}

export async function getCachedApplications() {
  const db = await openApplicationsDB();

  return db.getAll("applications");
}
export async function saveApplicationPage(cacheKey, data) {
  const db = await openApplicationsDB();

  await db.put("applicationPages", {
    cacheKey,
    data,
    savedAt: Date.now(),
  });
}

export async function getCachedApplicationPage(cacheKey) {
  const db = await openApplicationsDB();

  const cached = await db.get("applicationPages", cacheKey);

  return cached ? cached.data : null;
}
