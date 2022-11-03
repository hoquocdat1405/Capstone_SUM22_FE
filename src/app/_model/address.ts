export interface ResProvince {
    results: Province[],
}

export interface ResDistrict {
    results: District[],
}

export interface ResWard {
    results: Ward[],
}

export interface Province {
    province_id: number,
    province_name: string,
    province_type: string
}

export interface District {
    district_id: number,
    district_name: string,
    district_type: string,
    lat: string,
    lng: string,
    province_id: number
}

export interface Ward {
    district_id: number,
    ward_id: string,
    ward_name: string,
    ward_type: string
}