import React from "react";
import { CardMedia, Typography, IconButton, Box } from "@mui/material";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { Post } from "../../types/Post";
import imagePath from "../../assets/job-post.jpg";

interface PostCardHeaderProps {
  post: Post;
  isListView: boolean;
  onSave: (post: Post) => void;
}

const PostCardHeader: React.FC<PostCardHeaderProps> = ({
  post,
  isListView,
  onSave,
}) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", marginBottom: 2 }}>
      <CardMedia
        component="img"
        image={imagePath}
        alt={post.title}
        sx={{
          width: 50,
          height: 50,
          borderRadius: "50%",
          objectFit: "cover",
          marginRight: 2,
        }}
      />
      <Typography
        variant="h5"
        component="div"
        sx={{
          fontWeight: "bold",
          flexGrow: 1,
          fontSize: isListView ? "1rem" : "1.75rem",
        }}
      >
        {post.title}
      </Typography>
      {!isListView && (
        <IconButton
          size="small"
          sx={{ marginLeft: "auto" }}
          onClick={(e) => {
            e.stopPropagation();
            onSave(post);
          }}
        >
          <BookmarkIcon />
        </IconButton>
      )}
    </Box>
  );
};

export default PostCardHeader;
