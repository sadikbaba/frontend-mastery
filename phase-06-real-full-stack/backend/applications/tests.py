from django.contrib.auth import get_user_model
from rest_framework.test import APITestCase

from .models import Application

User = get_user_model()


class ApplicationSearchTest(APITestCase):
    def setUp(self):
        self.user_a = User.objects.create_user(
            username="user_a", password="testpass123"
        )

        self.user_b = User.objects.create_user(
            username="user_b", password="testpass123"
        )

        Application.objects.create(
            user=self.user_a,
            company="Google",
            role="Python Developer",
            status="Applied",
            notes="Backend development",
        )

        Application.objects.create(
            user=self.user_a,
            company="Amazon",
            role="Frontend Developer",
            status="Interview",
            notes="React and JavaScript",
        )

        Application.objects.create(
            user=self.user_a,
            company="Microsoft",
            role="Software Engineer",
            status="Applied",
            notes="Python backend systems",
        )

        Application.objects.create(
            user=self.user_b,
            company="Python Labs",
            role="Backend Developer",
            status="Applied",
            notes="Django development",
        )

    def test_search_by_company(self):
        self.client.force_authenticate(user=self.user_a)

        response = self.client.get("/v1/api/applications/", {"search": "Google"})

        self.assertEqual(response.status_code, 200)

        results = response.data.get("results", response.data)

        self.assertEqual(len(results), 1)
        self.assertEqual(results[0]["company"], "Google")

    def test_search_by_role(self):
        self.client.force_authenticate(user=self.user_a)

        response = self.client.get(
            "/v1/api/applications/", {"search": "Python Developer"}
        )

        self.assertEqual(response.status_code, 200)
        results = response.data.get("results", response.data)

        self.assertEqual(len(results), 1)
        self.assertEqual(results[0]["company"], "Google")

    def test_search_by_notes(self):
        self.client.force_authenticate(user=self.user_a)

        response = self.client.get(
            "/v1/api/applications/", {"search": "backend systems"}
        )
        results = response.data.get("results", response.data)

        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(results), 1)

    def test_search_is_case_insensitive(self):
        self.client.force_authenticate(user=self.user_a)

        response = self.client.get("/v1/api/applications/", {"search": "python"})

        self.assertEqual(response.status_code, 200)

        results = response.data.get("results", response.data)

        self.assertEqual(len(results), 2)

    def test_search_with_no_matches(self):
        self.client.force_authenticate(user=self.user_a)

        response = self.client.get("/v1/api/applications/", {"search": "Nonexistent"})

        self.assertEqual(response.status_code, 200)
        results = response.data.get("results", response.data)
        self.assertEqual(len(results), 0)

    def test_search_combined_with_status(self):
        self.client.force_authenticate(user=self.user_a)

        response = self.client.get(
            "/v1/api/applications/", {"search": "Python", "status": "Applied"}
        )

        self.assertEqual(response.status_code, 200)
        results = response.data.get("results", response.data)

        self.assertEqual(len(results), 2)

    def test_search_respects_user_ownership(self):
        self.client.force_authenticate(user=self.user_a)

        response = self.client.get("/v1/api/applications/", {"search": "Python"})

        results = response.data.get("results", response.data)
        companies = [item["company"] for item in results]

        self.assertNotIn("Python Labs", companies)
