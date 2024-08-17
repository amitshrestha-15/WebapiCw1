import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { allLogs, clearError } from "../../redux/features/logSlice";
import LogCard from "./LogCard";
import { addLogs } from "../../redux/apiRoute/api";

const Logs = (userId) => {
  const { logs, loading, error } = useSelector((state) => state.log);
  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearError());
    }
    dispatch(allLogs(userId));
  }, [dispatch, error, userId]);

  return (
    <>
      <div className="bg-white">
        <h3 className="text-3xl font-bold mb-4 text-center py-4">Our Logs</h3>
        <div className="flex flex-col items-center">
          {loading ? (
            <span>Loading.....</span>
          ) : (
            logs &&
            logs.map((log) => (
              <div
                key={log._id}
                className="w-full max-w-2xl mb-4 border-b pb-4"
              >
                <LogCard log={log} />
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Logs;
