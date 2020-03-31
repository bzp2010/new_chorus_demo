import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import {Icon, AppBar as MDIAppBar} from "@material-ui/core";
import React from "react";

export default function AppBar() {

	return (
			<MDIAppBar position="fixed" elevation={0}>
				<Toolbar variant="dense" disableGutters={true}>
					<IconButton color="inherit" aria-label="menu" disableRipple={true}>
						<Icon className="header-logo iconfont icon-kodi" style={{ fontSize: 30 }}/>
					</IconButton>
				</Toolbar>
			</MDIAppBar>
	);
}