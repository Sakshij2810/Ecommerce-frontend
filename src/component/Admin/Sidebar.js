import React from "react";
import "./sidebar.css";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";

import { SimpleTreeView } from "@mui/x-tree-view/SimpleTreeView";

import { TreeItem } from "@mui/x-tree-view/TreeItem";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight"; // Custom collapse icon

import PostAddIcon from "@mui/icons-material/PostAdd";
import AddIcon from "@mui/icons-material/Add";
import ImportExportIcon from "@mui/icons-material/ImportExport";
import ListAltIcon from "@mui/icons-material/ListAlt";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import RateReviewIcon from "@mui/icons-material/RateReview";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/">
        <img src={logo} alt="Ecommerce" />
      </Link>
      <Link to="/admin/dashboard">
        <p>
          <DashboardIcon /> Dashboard
        </p>
      </Link>

      <div id="css-16alkdk-MuiTreeItem-root">
        <SimpleTreeView
          aria-label="customized"
          defaultExpandedItems={["1"]}
          slots={{
            expandIcon: ExpandMoreIcon,
            collapseIcon: ImportExportIcon,
            endIcon: ChevronRightIcon,
          }}
        >
          <TreeItem itemId="grid" label="Products" icon={<ListAltIcon />}>
            <Link to="/admin/products">
              <TreeItem
                itemId="grid-community"
                label="All"
                icon={<PostAddIcon />}
              />
            </Link>

            <Link to="/admin/product">
              <TreeItem itemId="grid-pro" label="Create" icon={<AddIcon />} />
            </Link>
          </TreeItem>
        </SimpleTreeView>
      </div>

      <Link to="/admin/orders">
        <p>
          <ListAltIcon />
          Orders
        </p>
      </Link>
      <Link to="/admin/users">
        <p>
          <PeopleIcon /> Users
        </p>
      </Link>
      <Link to="/admin/reviews">
        <p>
          <RateReviewIcon />
          Reviews
        </p>
      </Link>
    </div>
  );
};

export default Sidebar;
