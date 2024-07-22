import React from "react";
import { Typography, Box, Chip } from "@mui/material";
import { Post } from "../../types/Post";
import MarkDown from "../common/MarkDown";

interface PostCardBodyProps {
  post: Post;
  isListView: boolean;
  isSelected: boolean;
}

const PostCardBody: React.FC<PostCardBodyProps> = ({
  post,
  isListView,
  isSelected,
}) => {
  return (
    <>
      {!isListView && (
        <>
          <Typography variant="body1" color="text.secondary">
            {post.description}
          </Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap", marginTop: 2 }}>
            {post.keywords.map((keyword, index) => (
              <Chip
                key={index}
                label={keyword}
                sx={{ marginRight: 1, marginBottom: 1 }}
              />
            ))}
          </Box>
        </>
      )}
      {isSelected && <MarkDown>{post.details}</MarkDown>}
    </>
  );
};

export default PostCardBody;
