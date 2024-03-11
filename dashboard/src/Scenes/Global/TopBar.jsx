/* eslint-disable no-unused-vars */
import { Box, IconButton, InputBase, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, Tokens } from "../../Theme";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";

export default function TopBar() {
  const theme = useTheme();
  const colors = Tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  return <div>TopBar</div>;
}
