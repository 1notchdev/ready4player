import { useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import Label from "./Label";
import { XCircleIcon } from "@heroicons/react/outline";
import SecondaryButton from "../Buttons/SecondaryButton";
import { isFunction } from "../../utils/Helpers";
const Dropzone = ({
    labelText="Add Attachments",
    id="",
    required = false,
    onChange = null
}) => {
    const [attachments, setAttachments] = useState([]);

    const { getRootProps, getInputProps } = useDropzone({
        onDrop: acceptedFiles => {
            setAttachments([
                ...attachments,
                acceptedFiles[0]
            ]);
        }
    });

    useEffect(() => {
        if (isFunction(onChange)) {
            onChange(attachments);
        }
    }, [attachments]);

    const removeAttachment = (idx) => {
        const tmp_attachments = [...attachments];
        tmp_attachments.splice(idx, 1);
        setAttachments(tmp_attachments);
    }
    return (
        <div className="flex flex-col gap-1">
            {
                labelText &&
                <Label htmlFor={id}>
                    {labelText}:
                    {required && <span className="pl-1 text-red-500">*</span>}
                </Label>
            }
            <div {...getRootProps({ className: 'r4p-dropzone bg-second border border-darkblue border-dashed py-12' })}>
                <input {...getInputProps()} />
                <p className="text-white/[0.32] text-center">Drag or select a file</p>
            </div>
            {
                attachments && attachments.length > 0 && (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 pt-3">
                        {
                            attachments.map((attach, idx) => (
                                <div className="flex justify-between items-center border border-darkblue p-1" key={idx}>
                                    <p className="truncate">{attach.name}</p>
                                    <SecondaryButton type="button" onClick={() => removeAttachment(idx)}>
                                        <XCircleIcon className="w-4 h-4" />
                                    </SecondaryButton>
                                </div>
                            ))
                        }
                    </div>
                )
            }
            

        </div>
    )
}

export default Dropzone;