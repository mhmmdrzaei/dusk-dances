import Link from "next/link";
import Layout from "./components/Layout";

export default function NotFound() {
  return (
    <Layout>
      <div className="not-found">
        <h1>404 - Page Not Found</h1>
        <p>The page you are looking for does not exist.</p>
        <Link href="/">Go back to home</Link>
      </div>
    </Layout>
  );
}
