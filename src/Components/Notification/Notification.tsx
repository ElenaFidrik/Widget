import React, {FC} from "react";

interface AlertProps {
    message: string
}

export function Notification(className: string): FC<AlertProps> {
    return ({message}) =>
        message
            ? <div className={`alert ${className}`}>{message}</div>
            : null;
}

export const ErrorAlert = Notification('alert-danger');
export const WarningAlert = Notification('alert-warning');