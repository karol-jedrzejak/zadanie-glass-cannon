<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Products;

use App\Http\Requests\ProductsStoreRequest;
use App\Http\Requests\ProductsUpdateRequest;

class ProductsApiController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return response()->json(Products::get());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(ProductsStoreRequest $request)
    {
        $request->validated();
        $data = $request->post();
        $data['id'] = null;
        Products::create($data);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return response()->json(Products::find($id));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(ProductsUpdateRequest $request, string $id)
    {
        $request->validated();
        $data = $request->post();
        $product = Products::find($id);
        $product->update($data);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        Products::find($id)->delete();
    }
}
