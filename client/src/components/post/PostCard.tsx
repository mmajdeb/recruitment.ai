import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
  Chip,
  Divider,
  IconButton,
} from "@mui/material";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { Post } from "../../types/Post";
import imagePath from "../../assets/job-post.jpg";
import useAuth from "../../hooks/useAuth";
import MarkDown from "../common/MarkDown";

interface PostCardProps {
  post: Post;
  onSave: (post: Post) => void;
  onApply: (post: Post) => void;
  onClick: (post: Post) => void;
  isSelected: boolean;
  isHighlighted: boolean;
  isListView?: boolean; // New prop to conditionally render details
}

const PostCard: React.FC<PostCardProps> = ({
  post,
  onSave,
  onApply,
  onClick,
  isSelected,
  isHighlighted,
  isListView = false, // Default to false
}) => {
  const { user } = useAuth();
  const [showDetails, setShowDetails] = useState(false);

  const handleToggleDetails = () => {
    setShowDetails((prevState) => !prevState);
  };

  return (
    <Card
      sx={{
        margin: 2,
        display: "flex",
        flexDirection: "column",
        position: "relative",
        cursor: "pointer",
        border: isHighlighted ? "2px solid #f50057" : "none", // Conditionally apply border
      }}
      onClick={() => onClick(post)}
    >
      <CardContent sx={{ padding: 2, flexGrow: 1 }}>
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
              fontSize: isListView ? "1rem" : "1.75rem", // Ensure title size remains consistent
            }}
          >
            {post.title}
          </Typography>
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
        </Box>

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
      </CardContent>
      {!isListView && <Divider />}
      <CardContent
        sx={{ display: "flex", justifyContent: "flex-end", padding: 2 }}
      >
        <Button size="small" variant="outlined" onClick={handleToggleDetails}>
          {showDetails ? "Hide Details" : "View Details"}
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
    </Card>
  );
};

export default PostCard;
