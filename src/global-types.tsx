export type ImageInfo = {
    id: string,
    url: string,
    filename: string,
    description: string,
    uploadedBy: string,
    createdAt: string,
    updatedAt: string,
    sizeInBytes: number,
    favorited: boolean,
    dimensions: { width: number, height: number },
    resolution: { width: number, height: number },

}