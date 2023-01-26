import React from "react";

type PageProps = {
  params: {
    todoId: string;
  };
};

function TodoPage({ params: { todoId } }: PageProps) {
  return <div>TodoPage: {todoId} The Ultimate NEXT.JS 13 Tutorial 17:15 </div>;
}

export default TodoPage;
