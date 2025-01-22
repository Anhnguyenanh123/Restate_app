import {Text, ScrollView, TouchableOpacity} from 'react-native'
import React, {useState} from 'react'
import {router, useLocalSearchParams} from "expo-router";
import {categories} from "@/constants/data";

const Filter = () => {
    const params = useLocalSearchParams<{ filter?: string }>();
    const [selectedCategory, setSelectedCategory] =
        useState(params.filter || 'All');
    const handleCategory = (category: string) => {
        if (selectedCategory === category) {
            setSelectedCategory('All');
            router.setParams({filter: 'All'});
            return;
        }
        setSelectedCategory(category);
        router.setParams({filter: category});
    }

    return (
        <ScrollView
            horizontal
            showsVerticalScrollIndicator={false}
            className="mt-3 mb-2"
        >
            {categories.map((item, index) => (
                <TouchableOpacity
                    onPress={() => handleCategory(item.category)}
                    className={`flex flex-col items-start
                    my-4 px-4 py-2 rounded-full
                    ${selectedCategory === item.category
                        ? `bg-primary-300` : `bg-accent-100 border border-primary-200`}`}
                >
                    <Text className={`text-sm 
                    ${selectedCategory === item.category ?
                        `text-white font-rubik-bold mt-0.5` : `text-black-300 font-rubik`}`}
                    >
                        {item.title}
                    </Text>
                </TouchableOpacity>
            ))}
        </ScrollView>
    )
}
export default Filter
