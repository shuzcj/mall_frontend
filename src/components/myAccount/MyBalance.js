import react from "react";
import {Button, Statistic} from "antd";

function MyBalance() {
    return (
        <div >
            <Statistic title="Account Balance (CNY)" value={112893} precision={2} />
            <Button
                style={{
                    marginTop: 16,
                }}
                type="primary"
            >
                Recharge
            </Button>

        </div>
    );
}

export default MyBalance;