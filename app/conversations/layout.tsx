import getConverations from "../actions/getConversations";
import Sidebar from "../components/sidebar/Sidebar";
import ConversationList from "./components/ConversationList";

export default async function ConversationsLayout({
  childern,
}: {
  childern: React.ReactNode;
}) {
  const conversations = await getConverations();

  return (
    // @ts-expect-error Server Component
    <Sidebar>
      <div className="h-full">
        <ConversationList initialItems={conversations} />
        {childern}
      </div>
    </Sidebar>
  );
}
