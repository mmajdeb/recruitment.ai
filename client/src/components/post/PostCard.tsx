import React, { useState } from "react";
import { Card, CardContent, Divider } from "@mui/material";
import { Post } from "../../types/Post";
import PostCardHeader from "./PostCardHeader";
import PostCardBody from "./PostCardBody";
import PostCardFooter from "./PostCardFooter";

interface PostCardProps {
  post: Post;
  onSave: (post: Post) => void;
  onApply: (post: Post) => void;
  onClick: (post: Post, isButtonClick: boolean) => void;
  isSelected: boolean;
  isHighlighted: boolean;
  isListView?: boolean;
}

const PostCard: React.FC<PostCardProps> = ({
  post,
  onSave,
  onApply,
  onClick,
  isSelected,
  isHighlighted,
  isListView = false,
}) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleToggleDetails = () => {
    setShowDetails((prevState) => !prevState);
    onClick(post, true);
  };

  return (
    <Card
      sx={{
        margin: 2,
        display: "flex",
        flexDirection: "column",
        position: "relative",
        cursor: isSelected ? "text" : "pointer",
        border: isHighlighted ? "2px solid #f50057" : "none",
      }}
      onClick={() => onClick(post, false)}
    >
      <CardContent sx={{ padding: 2, flexGrow: 1 }}>
        <PostCardHeader post={post} isListView={isListView} onSave={onSave} />
        {!isListView && (
          <PostCardBody
            post={post}
            isListView={isListView}
            isSelected={isSelected}
          />
        )}
      </CardContent>
      {!isListView && <Divider />}
      {!isListView && (
        <PostCardFooter
          post={post}
          showDetails={showDetails}
          handleToggleDetails={handleToggleDetails}
          onApply={onApply}
          isSelected={isSelected}
        />
      )}
    </Card>
  );
};

export default PostCard;
