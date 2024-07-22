import React from "react";
import { Button, CardContent } from "@mui/material";
import { Post } from "../../types/Post";
import useAuth from "../../hooks/useAuth";

interface PostCardFooterProps {
  post: Post;
  showDetails: boolean;
  handleToggleDetails: () => void;
  onApply: (post: Post) => void;
  isSelected: boolean;
}

const PostCardFooter: React.FC<PostCardFooterProps> = ({
  post,
  handleToggleDetails,
  onApply,
  isSelected,
}) => {
  const { user } = useAuth();

  return (
    <CardContent
      sx={{ display: "flex", justifyContent: "flex-end", padding: 2 }}
    >
      <Button
        size="small"
        variant="outlined"
        onClick={(e) => {
          e.stopPropagation();
          handleToggleDetails();
        }}
      >
        {isSelected ? "Back to List" : "View Details"}
      </Button>
      {user && (
        <Button
          size="small"
          variant="contained"
          sx={{ marginLeft: 1 }}
          onClick={(e) => {
            e.stopPropagation();
            onApply(post);
          }}
        >
          Apply
        </Button>
      )}
    </CardContent>
  );
};

export default PostCardFooter;
