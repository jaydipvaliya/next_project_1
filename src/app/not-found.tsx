import NotFoundView from "@/components/common/NotFoundView";

export const metadata = {
  title: "404 - Not Found | Campus Directory",
  description: "The requested directory entry or path could not be located.",
};

export default function NotFound() {
  return <NotFoundView />;
}
