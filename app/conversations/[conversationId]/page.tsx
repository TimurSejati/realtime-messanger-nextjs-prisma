import getConversationById from "@/app/actions/getConversationId";
import getMessages from "@/app/actions/getMessages";
import EmptyState from "@/app/components/EmptyState";

interface IParams {
  conversationId: string;
}

const ConversationId = async ({ params }: { params: IParams }) => {
  const conversation = await getConversationById(params.conversationId);
  const messages = await getMessages(params.conversationId);

  if (!conversation) {
    return (
      <div className="h-full lg:pl-80">
        <div className="flex flex-col h-full">
          <EmptyState />
        </div>
      </div>
    );
  }

  return (
    <div className="h-full lg:pl-80">
      <div className="flex flex-col h-full">
        <h1>Converesation ID</h1>
      </div>
    </div>
  );
};

export default ConversationId;
