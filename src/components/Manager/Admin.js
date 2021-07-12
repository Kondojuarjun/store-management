import React from 'react';
import "./admin.css";



const ManagerView = () => {

    return (
    <div className="admin_body">
        <div className="admin_header">
            <h2 className="inventory_menu">INVENTORY</h2>
            <h2 to="/admin/add_medicine" className="admin_button">Add Medicine</h2>
            <h2 to="/admin/view_inventory" className="admin_button">View Inventory</h2>
            <h2 className="team_menu">TEAM</h2>
            <h2 to="/admin/add_sales_executive" className="admin_button">Add Sales Executive</h2>
            <h2 to="/admin/view_team" className="admin_button" >View Team</h2>
            <h2 className="order_menu">ORDERS</h2>
            <h2 to="/admin/show_all_orders" className="admin_button" >Show All Orders</h2>
            <h2 to="/admin/create_orders" className="admin_button" >Create Order</h2>
        </div>
    </div >);
}

export default ManagerView;